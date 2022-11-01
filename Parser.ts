import axios, { Axios } from 'axios';

interface filters {
    minUsers: number;
    maxUsers: number;
}

export interface Description {
    word:       string;
    phonetics:  Phonetic[];
    meanings:   Meaning[];
    license:    License;
    sourceUrls: string[];
}

export interface License {
    name: string;
    url:  string;
}

export interface Meaning {
    partOfSpeech: string;
    definitions:  Definition[];
    synonyms:     string[];
    antonyms:     string[];
}

export interface Definition {
    definition: string;
    synonyms:   any[];
    antonyms:   any[];
    example?:   string;
}

export interface Phonetic {
    audio:      string;
    sourceUrl?: string;
    license?:   License;
    text?:      string;
}


class data {
    link: String;
    onlineMembers: number;
    totalMembers: number;

    constructor(link: string, onlineMembers: number, totalMembers: number) {
        this.link = link;
        this.onlineMembers = onlineMembers;
        this.totalMembers = totalMembers;
    }
}

export class Parser {
    static synonymsLink: string = "https://api.dictionaryapi.dev/api/v2/entries/en/";
    static apiLink: string = "https://discord.com/api/v9/invites/";
    keyword: string;
    filters: filters;

    private static async getDescription(word: string) {
        let request: string = this.synonymsLink.concat(word.toString());
        try {
            const { data, status } = await axios.get<Description>(
                request,
                {
                    headers: {
                        Accept: "application/json"
                    }
                },
            );
            return data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log("Error Message: ", error.message);
                return -1;
            } else {
                console.log("Unhandled error");
                return -2;
            }
        }
    }

    private static async getAllSynonyms(word: string): Promise<string[]> {
        let synonyms: string[] = [];
        let data: Description | number = await this.getDescription(word)
        if (typeof data === "number") {
            console.log(data.toString())
        } else {
            
        }
        return synonyms;
    }

    private static inviteProcess(invite: string): data {
        let result: data = new data("", 0, 0)
        result.link = "";

        return result;
    }

    static fetch(): data[] {
        let results: data[] = [];

        return results;
    }

    constructor(keyword: string, filters: filters) {
        this.keyword = keyword;
        this.filters = filters;
    }
}