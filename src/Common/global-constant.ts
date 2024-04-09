export class GlobalConstant {
    public static token = localStorage.getItem("bearerToken")
    public static baseurl = "https://partiel.thomascarrot.com"
    public static isLogged :boolean = localStorage.getItem("bearerToken") !== null
}
