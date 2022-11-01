interface filters{
    minUsers: number;
    maxUsers: number;

}

export class Parser{
    apiLink: String = "https://discord.com/api/v9/invites/"
    synonymsLink: String = ""
    keyword: String;
    filters: filters;

    constructor(keyword, filters){
        this,keyword = keyword;
        this.filters = filters;
    }
}