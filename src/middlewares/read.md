// http course server or app baat krte h

http headers =  meta data :- key along sent along with request and response 

headers :- caching,authentication,manage state
request headers - from client
response headers- from server
representation headers - encoding / compression
payload headers - data


most common headers :-
1. accept type meta data header:- application/json
2. user agent:- konsi application se request aayi h
3. authorization:- Bearer token frontent se
4. content - type ;- images ,ya kya bhej rhe h
5. cookie;- unique code kitne time tk user login rhega 
6. cache-control;- data kb expire hoga


cors and security headers hote jo decide krte h kon kon se origin alllow kr rhe h konse method allow h

http method:-basic set of operation that can we used to interact with server
get:- retrieve a resource
head:- no mesage body (response headers only)
options:- what operations are available
trace:- loopback test (get same data)
delete:- remove a resource
put:- replace a resource
post:- interact with resource(mostly add)
patch:- change part of a resource

http status code

1xx information
2xx success
3xx redirection
4xx client error
5xx server error 

100 continue
102 processing
200 ok
201 created
202 accepted
400 bad request
404 not found