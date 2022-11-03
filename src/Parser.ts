import axios from 'axios';

interface filters {
    minUsers: number;
    maxUsers: number;
}

type Description = {
    word: string;
    phonetics?: Phonetic[];
    meanings?: Meaning[];
    license: License;
    sourceUrls: string[];
}

type License = {
    name: string;
    url: string;
}

type Meaning = {
    partOfSpeech?: string;
    definitions?:  Definition[];
    synonyms?: string[];
    antonyms?: string[];
}

type Definition = {
    definition?: string;
    synonyms?: string[];
    antonyms?: string[];
    example?: string;
}

type Phonetic = {
    audio?: string;
    sourceUrl?: string;
    license?: License;
    text?: string;
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

    constructor() {
        
    }

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
        let temp: string[] = [];
        let data: Description | number = await this.getDescription(word)
        if (typeof data === "number") {
            console.log(data.toString())
        } else {
            if(data.meanings){
                //Parse through the entirety of the data received
                let d: Meaning[] = data.meanings
                for(let val in d){
                    if(val == "synonyms"){temp.concat(val)};  
                }

                for(let val of d){
                    if(val == "Definition"){
                        if(val.synonyms){temp.concat(val.synonyms)};
                    };
                }
            }
        }
        return synonyms;
    }

    private static inviteProcess(invite: string): data {
        let result: data = new data("", 0, 0)
        result.link = "";

        return result;
    }

    public fetch(keyword: string): data[] {
        let results: data[] = [];

        return results;
    }
}