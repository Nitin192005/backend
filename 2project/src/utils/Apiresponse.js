class Apiresponse{
 constructor(statusCode, data, message= "Success"){
    this.statusCode = statusCode
    this.data= data
    this.message = message
    this.success = statusCode < 400 // this is because above 400 their is client error or server error
 }   
}