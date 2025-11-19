import { create, type StateCreator } from "zustand"

interface UserStateType {
    firstName: string;
    lastName: string;
    age: number;
    updateFirstName: (name: string) => void;
}

const userStore: StateCreator<UserStateType> = (set) => {
    return {
        firstName: "Mark",
        lastName: "Kinyanjui",
        age: 23,
        updateFirstName: function(name: string) {
            set({firstName: name});
        }
    }
}

const useUser = create(userStore);

export default useUser;