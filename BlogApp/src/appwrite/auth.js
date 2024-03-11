// Appwrite snippet for the auth services

import conf from "../conf/conf.js";
import {Account , ID, Client} from "appwrite";
export class AuthService{
    client = new Client();
    account;
    constructor(){
        
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async CreateAccount({email , password , name}){
        try {
            // console.log(ID.unique());
            const userAccount = await this.account.create(ID.unique(), email , password , name)
            if(userAccount) {
                // call another method for the login
              return  this.login({email ,  password});
            }
            else return userAccount; 
        } catch (error) {
            throw error;
        }
    }

    async login({email , password}){
        try {
            return await this.account.createEmailSession(email , password);
        } catch (error) {
            throw error;
        }
    }
    
    async getCurrentUser() {
        try {
            const res =  await this.account.get();
            return res;
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
            
        }
        return null;
    }

    
    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service:: logout erroe", error);
        }
    }
}

const authService = new AuthService();
export default authService;
