import { Task } from "./pageload-tasks"

export const State = {
    lists: [],
    selectedListId: null,

    getLists() {
        return this.lists;
    },

    getSelectedListId() {
        return this.selectedListId;
    },

    setLists(newLists) {
        this.lists = newLists;
        this.save();
    },

    setSelectedListId(id) {
        this.selectedListId = id;
        this.save();
    },

    save() {
        localStorage.setItem('lists', JSON.stringify(this.lists));
        localStorage.setItem('selectedListId', this.selectedListId);
    },

    load() {
        const savedLists = localStorage.getItem('lists');
        const savedSelectedListId = localStorage.getItem('selectedListId');

        this.lists = savedLists ? JSON.parse(savedLists) : [];
        this.selectedListId = savedSelectedListId || null;
    }
};

State.load()