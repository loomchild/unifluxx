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


