import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import styles from './CheckList.module.css';

type ChecklistState = Record<string, boolean>;

type ChecklistContextValue = {
  items: ChecklistState;
  registeredItems: Set<string>;
  registerItem: (id: string) => void;
  unregisterItem: (id: string) => void;
  setChecked: (id: string, checked: boolean) => void;
  reset: () => void;
  total: number;
  completed: number;
};

const STORAGE_KEY = 'logging-observability-checklist';

const ChecklistContext = createContext<ChecklistContextValue | undefined>(
  undefined,
);

type ChecklistProviderProps = {
  id: string;
  children: ReactNode;
};

export function ChecklistProvider({id, children}: ChecklistProviderProps) {
  const [items, setItems] = useState<ChecklistState>({});
  const [registeredItems, setRegisteredItems] = useState<Set<string>>(
    () => new Set(),
  );
  const storageKey = `${STORAGE_KEY}-${id}`;

  // Load saved checkbox state from localStorage.
  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);

      if (saved) {
        setItems(JSON.parse(saved) as ChecklistState);
      }
    } catch {
      // Ignore invalid or unavailable localStorage data.
    }
  }, [storageKey]);

  const registerItem = useCallback((id: string) => {
    setRegisteredItems(current => {
      if (current.has(id)) {
        return current;
      }

      const updated = new Set(current);
      updated.add(id);

      return updated;
    });
  }, []);

  const unregisterItem = useCallback((id: string) => {
    setRegisteredItems(current => {
      if (!current.has(id)) {
        return current;
      }

      const updated = new Set(current);
      updated.delete(id);

      return updated;
    });
  }, []);

  const setChecked = useCallback((id: string, checked: boolean) => {
    setItems(current => {
      const updated = {
        ...current,
        [id]: checked,
      };

      try {
        localStorage.setItem(storageKey, JSON.stringify(updated));
      } catch {
        // Ignore localStorage write failures.
      }

      return updated;
    });
  }, [storageKey]);

  const reset = useCallback(() => {
    setItems({});

    try {
      localStorage.removeItem(storageKey);
    } catch {
      // Ignore localStorage failures.
    }
  }, [storageKey]);

  const total = registeredItems.size;

  const completed = useMemo(
    () =>
      Array.from(registeredItems).filter(id => items[id] === true).length,
    [items, registeredItems],
  );

  return (
    <ChecklistContext.Provider
      value={{
        items,
        registeredItems,
        registerItem,
        unregisterItem,
        setChecked,
        reset,
        total,
        completed,
      }}
    >
      <div className={styles.checklist}>{children}</div>
    </ChecklistContext.Provider>
  );
}

function useChecklist(): ChecklistContextValue {
  const context = useContext(ChecklistContext);

  if (!context) {
    throw new Error(
      'Checklist components must be used inside ChecklistProvider.',
    );
  }

  return context;
}

type ChecklistItemProps = {
  id: string;
  children: ReactNode;
};

export function ChecklistItem({id, children}: ChecklistItemProps) {
  const {
    items,
    registerItem,
    unregisterItem,
    setChecked,
  } = useChecklist();

  useEffect(() => {
    registerItem(id);

    return () => {
      unregisterItem(id);
    };
  }, [id, registerItem, unregisterItem]);

  return (
    <label className={styles.item}>
      <input
        className={styles.checkbox}
        type="checkbox"
        checked={items[id] ?? false}
        onChange={event => setChecked(id, event.target.checked)}
      />

      <span className={styles.itemText}>{children}</span>
    </label>
  );
}

export function ChecklistProgress() {
  const {completed, total} = useChecklist();

  if (total === 0) {
    return null;
  }

  const percentage = Math.round((completed / total) * 100);

  return (
    <div className={styles.progressSection}>
      <div className={styles.progressLabel}>
        {completed} of {total} checked ({percentage}%)
      </div>

      <progress
        className={styles.progress}
        value={completed}
        max={total}
      />
    </div>
  );
}

export function ChecklistReset() {
  const {reset, completed} = useChecklist();

  return (
    <button
      className={styles.resetButton}
      type="button"
      onClick={reset}
      disabled={completed === 0}
    >
      Reset checklist
    </button>
  );
}
