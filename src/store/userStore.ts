import { create, type StateCreator } from "zustand"

interface UserStateType {
    firstName: string;
    lastName: string;
    age: number;
}

const userStore: StateCreator<UserStateType> = (set) => {
    return {
        firstName: "Mark",
        lastName: "Kinyanjui",
        age: 23
    }
}

const useUser = create(userStore);

export default useUser;