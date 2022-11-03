import axios from 'axios';
class data {
    link;
    onlineMembers;
    totalMembers;
    constructor(link, onlineMembers, totalMembers) {
        this.link = link;
        this.onlineMembers = onlineMembers;
        this.totalMembers = totalMembers;
    }
}
export class Parser {
    static synonymsLink = "https://api.dictionaryapi.dev/api/v2/entries/en/";
    static apiLink = "https://discord.com/api/v9/invites/";
    constructor() {
    }
    static async getDescription(word) {
        let request = this.synonymsLink.concat(word.toString());
        try {
            const { data, status } = await axios.get(request, {
                headers: {
                    Accept: "application/json"
                }
            });
            return data;
        }
        catch (error) {
            if (axios.isAxiosError(error)) {
                console.log("Error Message: ", error.message);
                return -1;
            }
            else {
                console.log("Unhandled error");
                return -2;
            }
        }
    }
    static async getAllSynonyms(word) {
        let synonyms = [];
        let temp = [];
        let data = await this.getDescription(word);
        if (typeof data === "number") {
            console.log(data.toString());
        }
        else {
            if (data.meanings) {
                //Parse through the entirety of the data received
                let d = data.meanings;
                for (let val in d) {
                    if (val == "synonyms") {
                        temp.concat(val);
                    }
                    ;
                }
                for (let val of d) {
                    if (val == "Definition") {
                        if (val.synonyms) {
                            temp.concat(val.synonyms);
                        }
                        ;
                    }
                    ;
                }
            }
        }
        return synonyms;
    }
    static inviteProcess(invite) {
        let result = new data("", 0, 0);
        result.link = "";
        return result;
    }
    fetch(keyword) {
        let results = [];
        return results;
    }
}
