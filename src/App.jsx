import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Recipes from "./Components/Recipe/Recipes";
// import Signup from "./Components/Account/Signup";
import PersonalDetails from  "./Components/Pesonal_details/PersonalDetails"
// import Store from "./Components/Store/Store";
// import Workoutss from "./Components/Workouts/Workoutss";
// import Workout_Done from "./Components/Workouts/Workout_done";
// import Workoutss from "./Components/Workouts/Workoutss";
// import Home_workout from "./Components/Workouts/Home_workout";
// import payment_gateway from "./Components/Payment_gateway/payment_gateway";
// import Bmi from "./Components/BMI/Bmi";
// import TBW from "./Components/TBW/TBW";
// import BmiResult from "./Components/BMI/BmiResult";
// import Course_overview from "./Screens/Course_overview";
// import Nav from "./Components/Top_Nav/Nav";
// import Courses from "./Components/Course_overview/Courses";
// import Course_fullscreen from "./Components/Course_overview/Course_fullscreen";
// import Process_loader from "./Components/Loaders/Processing_loader";
// import Grocery_list from "./Components/Grocery/Grocery_list";

// import Store from "./Components/Store/Store";
// import Workout_fullbody from "./Components/Workouts/Workout_fullbody";
// import Workout_fullbody_Pause from "./Components/Workouts/Workout_fullbody_Pause";
// import Dropdown from "./Components/Dropdowns/Dropdown";
import Videocall from "./Components/Appointment/VideoCall";
import Store from "./Components/Store/Store";
// import MyFavourite from "./Components/MyFavourite/MyFavourite";
import MedcineTracker from "./Components/MedcineTracker/MedcineTracker";
// import ProPic from "./Components/ProPic/ProPic";
// import Sleep_tracker from "./Components/Trackers/Sleep_trackers";
// import TBWresult from "./Components/TBW/TBWresult";
// import Payment_done from "./Components/Payment_gateway/Payment_done";
// import Analyzing_loader from "./Components/Loaders/Analyzing_loader";
import Appointment_overview2 from "./Components/Appointment/Appointment_overview2";
import Appointment_track from "./Components/Appointment/Appointment_track";

// import Nav from "./Components/Top_Nav/Nav";

// import Terms_of_service from "./Screens/Terms_of_service";
import LandingPage from "./Screens/LandingPage";
// import Recipe_list from "./Components/Recipe/Recipe_list";
import Recipe_step from "./Components/Recipe/Recipe_step";
import Order from "./Components/MyOrder/Order";
import ProPic from "./Components/ProPic/ProPic";
import MyOrder from "./Components/MyOrder/MyOrder";
import OrderOverview from "./Components/MyOrder/OrderOverview";
import OrderOverview2 from "./Components/MyOrder/OrderOverview2";
// import OrderTracker from "./Components/MyOrder/OrderTracker";
import PersonalDetails2 from "./Components/Pesonal_details/PersonalDetails2"
import ActivateMealPlan from "./Components/MyMealPlan/ActivateMealPlan"
import Password from "./Components/Password/Password"
import ChangePassword from "./Components/Password/ChangePassword";
import SentCode from "./Components/Password/SentCode";
import ProfilePicture from "./Components/ProPic/ProfilePicture";
import Tracker from "./Components/Dashboard/Trackers/Tracker";
import WaterTracker from "./Components/Trackers/main/WaterTracker";
import SleepTracker from "./Components/Trackers/main/SleepTracker";
import StepTracker from "./Components/Trackers/main/StepsTracker";
import StepsTracker from "./Components/Trackers/main/StepsTracker";
import MedicineTracker from "./Components/Trackers/main/MedicineTracker";
import medicine from "./Components/Trackers/main/medicine";
import stepsTracker2 from "./Components/Trackers/main/stepsTracker2";
import MyMealPlan from "./Components/MyMealPlan/MyMealPlan";
import UnitMeasurement from "./Components/UnitMeasurement/UnitMeasurement";
import ProfileOverview from "./Components/ProPic/ProfileOverview";
import MyMealPlan2 from "./Components/MyMealPlan/Meal";
import Foodlog from "./Components/Foodlog/Foodlog";
import Snacks from "./Components/Snacks/Snacks";
import calorieProg from "./Components/Foodlog/calorieProg";
import Dates from "./Components/MyMealPlan/Dates/Dates";
import Meal from "./Components/MyMealPlan/Meal"
import Ques from "./Components/Question/Ques"
import WhoWeAre from "./Components/WhoWeAre/WhoWeAre";
import Terms_of_service from "./Screens/Terms_of_service";
// import WhoWeAre from "./Screens/WhoWeAre";
import FAQ from "./Components/FAQ/FAQs"
import MealPlans from "./Components/MealPlans/MealPlans"





const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={LandingPage} />
          <Route path="/MyAccount" Component={PersonalDetails2} />
          <Route path="/Store" Component={Store} />
          <Route path="/OurService" Component={WaterTracker} />
          <Route path="/StartYourJourney" Component={Videocall} />
          <Route path="/WhoWeAre" Component={WhoWeAre} />
          <Route path="/MyAppointment" Component={Appointment_track} />
          <Route path="/ChangePassword" Component={ChangePassword} />
          <Route path="/stepTracker2" Component={stepsTracker2} />
          <Route path="/overview" Component={ProfileOverview} />
          <Route path="/Foodlog" Component={Foodlog} />
          <Route path="/MealPlan" Component={Meal} />
          <Route path="/Store" Component={Store} />
          <Route path="/TermsOfUse" Component={Terms_of_service} />
          <Route path="/FAQ" Component={FAQ} />
          <Route path="/MealPlans" Component={Ques} />
        </Routes>
      </Router>
      {/* <Recipes/> */}
    </>
  );
};

export default App;
