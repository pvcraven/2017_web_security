public static void main(String[] args) 
{
    final String secretKey = "mysecretkey";
     
    String originalString = "textIwantToEncrypt";
    String encryptedString = AES.encrypt(originalString, secretKey) ;
    String decryptedString = AES.decrypt(encryptedString, secretKey) ;
     
    System.out.println(originalString);
    System.out.println(encryptedString);
    System.out.println(decryptedString);
}