# fileupload-read_plain_node.js
 A very basic API for reading and uploading a text file in plain node(without a framework)
 
 #How to run
 To read a file
 * Using a client(Postman etc), read a file by usging the url ``http://localhost:3000/readfile``
 * Enter params in the form ``'filename': <name-of-file>``
 To upload a file 
 * Using a client(Postman etc), read a file by usging the url ``http://localhost:3000/uploadfile``
 * The API stores all files under the name ``newfile.txt`` by defualt 
 * The API allows only one file upload and hence overwrites previous files on new uploads
