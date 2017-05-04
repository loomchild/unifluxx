# Unifluxx
_Flux-fetch | NBS BIM toolkit_

### About

This app makes requests to [NBS BIM toolkit api](https://toolkit.thenbs.com/articles/for-software-developers/) from [flux.io](https://flux.io/) cell values. For each uniclass code, a response for Level Of Information (LOI) 2-6 are returned from NBS.

### Instructions

1.  Click on the login button and authorize the application to access your flux projects.

2.  Select the project you are working with and then select source and target keys to read(source) and write(target) to in Flux and finally an Error Key so you can be notified of what went wrong when trying to fetch from NBS Toolkit. Click 'save', and visit flux project.

 <b> NOTE </b> : The app will listen for changes in this source key. Values for the source key must be an array of uniclass code strings.

 Example Source input:

   ```
     [
     "Ss_25_14_67",
     "Ss_25_15_85",
     "Ss_20_05_15"
   ]
   ```

3. Update value of source key and wait for server to finish fetching from NBS (NBS API currently has rate limit of one request per second)

4. See target key for reponse from NBS API. Example of output for example input above [here](https://gist.github.com/bigdoods/5988cf3a178c259029bf38527fad734e)


### Github

https://github.com/ArcDoxDev/Unifluxx

<<<<<<< HEAD
=======
  ```
  $ npm start
  ```

5. Open your browser to http://localhost:3000 .

6. Click on the login button and authorize the application to access your flux projects.

7. Select a project, source, target and error keys. The app will listen for changes in the source key (takes an array of uniclass code strings)

8. Click 'save', and visit flux project.

9. Update value of source key (e.g data/sampleSource.json) and wait for server to finish fetching from NBS (NBS API currently has rate limit of one request per second so 3 uniclass codes = 3 * 5(ForEach Level of Information 2-6) = 15 requests = 15 seconds.)

10. See target key for reponse from NBS API (e.g data/sampleOutput.json) and the Error key for details on which codes failed to fetch from the NBS toolkit API.

## Deployment

Use docker:

```
 $ docker run -d \
    -e FLUX_ID=xxx \
    -e FLUX_SECRET=xxx \
    -e NBS_ID=xxx \
    -e NBS_SECRET=xxx \
    -p 3000:3000 \
    bigdoods/unifluxx
```

## Contributing

We welcome any contributions and are here to help for any developers looking to get started.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Authors

* **Javier Vizoso** - *Flux sample app* - [Javiz](https://github.com/javiz)
* **John Egan** - *Requests to NBS, Error handling* - [bigdoods](https://github.com/bigdoods)

## Acknowledgments

* Hat tip to Alan Smith for NBS contributions
>>>>>>> update dockerfile
