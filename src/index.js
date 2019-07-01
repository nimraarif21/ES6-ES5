// alert("HELLO FROM WEB APP")
import {run } from  "./app/app";
import {AlertService} from "./app/AlertService"
import "./main.scss";
const alertservice= new AlertService();
run(alertservice);
