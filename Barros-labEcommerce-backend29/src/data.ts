import { character, GENDER, movie } from "./types";

export let movies: movie[] = [
    { 
        id: 1,
        title: "Harry Potter e a Pedra Filosofal",
        year: 2001
    },
    { 
        id: 2,
        title: "Harry Potter e a Câmara Secreta",
        year: 2002
    }
]

export let characters:character[]=[
    {
        id: 1,
        name: "storm",
        gender: GENDER.FEMALE 
    },
    {
        id: 2,
        name: "deadpool",
        gender: GENDER.OTHER,
        description: "Sexy mother f***" 
    },
    {
        id: 3,
        name: "colossus",
        gender: GENDER.MALE, 
    },
]