import { useState } from "react";


const getItem = <T>(key: string, fallback: T) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch {
    return fallback;
  }
}

const setItem = <T>(key: string, value: T) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error(e);
  }
}

export const useLocalStorage = <T>(key: string, value: T) => {
    const [valueState, setValueState] = useState<T>(() => {
        return getItem(key, value);
    })

    const set = (newValue: T) => {
        setValueState(newValue);
        setItem(key, newValue);
    }

    const remove = () => {
        setValueState(value);
        localStorage.removeItem(key);
    }

    return [valueState, set, remove] as const;
}