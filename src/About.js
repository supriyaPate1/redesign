import React from "react";
import "./about.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";
export default function About() {
  return (
    <>
      <div className="abtDiv">
        <div className="aboutPara">
          <h4>About Us</h4>
          <p>
            We are a family: Supriya and Neeraj, Neha and Shivanshi. We lived in
            the city, Barabanki and then discovered the beauty of Lucknow. We
            are here because we believe there is still a place in our community,
            our economy and our society for a family-owned and operated business
            where people do what they love and love what they do.
          </p>
          <p>
            Along with our skilled & dedicated staff, we bring experience &
            passion for art, writing, dance, camp counseling, human development
            & wellness, sculpture, illustration, graphic design, retail,
            wholesale manufacturing, carpentry, parenting, sustainability,
            peace, nurturing and teaching.
          </p>
          <h6>Shop no.-123 Patrakar Puram, Gomtinagar, Lucknow</h6>
        </div>
        <div className="aboutContact">
          <h4>Contact Us:</h4>
          <h6>
            <LocalPhoneIcon sx={{ color: "blue" }} /> +1 67798
          </h6>
          <h6>
            <MobileFriendlyIcon sx={{ color: "blue" }}></MobileFriendlyIcon> +91
            1436TamamZero32
          </h6>
          <h6>
            <WhatsAppIcon sx={{ color: "green" }} /> 677989000
          </h6>
          <h6>
            <EmailIcon sx={{ color: "red" }} /> sup@gmail.com
          </h6>
        </div>
      </div>
    </>
  );
}
