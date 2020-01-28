# tdee-reactivated
 Tool for accurate tracking of Total Daily Energy Expenditure based on daily caloric intake and weight
 
 TODOs:
 - Implement KG/LBS settings
 - Design and implement a navbar (Should have the following sections: Calculator/about/register/login/save to server/save to local/load from local, load from server?)
 - Implement a replacement for the main two input columns that will give the user information - recommended daily TDEE consumption, weeks to goal, weight lost so far, MAYBE: average loss per week?
 - Incorporate registering and logging in - first with something easy like just name
 - Incorporate saving the data to server and loading it at will
 
 
 Must:
- ✅ calculate the initial TDEE
- ✅ calculate the required caloric deficit/surplus for weight loss/gain
- ✅ allow the user to choose the pace of the weight change (e.g -0.333g per week)
- ✅ calculate required weeks to meet the goal
- ✅ allow the user to enter daily kcal/kg
- ✅ calculate weekly weight delta and average TDEE
- ✅ Weeks should be numbered and have their own date
-  support KGs/Lbs
 
 Should:
 - ✅ allow the user to pick amount of weeks for TDEE average
 - store the data on the firebase server
 
 Could:
 - Pull the daily kcal from MyFitnessPal API
 - utilize logins (facebook?)
 - export data as json
 - allow importing of data
