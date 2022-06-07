import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import StarIcon from '@mui/icons-material/Star';
import Colors from "../data/Colors";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#0F343E">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - present"
          contentStyle={{ background: Colors.darkest, color: Colors.middle }}
          iconStyle={{ background: Colors.darkest, color: Colors.middle }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack Developer - Yuser Inc.
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            London, Ontario
          </h4>
          <p>
            Helped the team launch 2 major features by working both in the front
            end and back end.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - 2021"
          contentStyle={{ background: Colors.darkest, color: Colors.middle }}
          iconStyle={{ background: Colors.darkest, color: Colors.middle }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Developer Intern - University of Windsor
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Windsor, Ontario
          </h4>
          <p>Developed the backend infrastructure for 3 projects.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020 - 2021"
          contentStyle={{ background: Colors.darkest, color: Colors.middle }}
          iconStyle={{ background: Colors.darkest, color: Colors.middle }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Master's Degree
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            University of Windsor
          </h4>

          <p> Applied Computing </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2018"
          contentStyle={{ background: Colors.darkest, color: Colors.middle }}
          iconStyle={{ background: Colors.darkest, color: Colors.middle }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Bachelor's Degree
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Islamic Azad University
          </h4>
          <p>IT Engineering</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2010 - 2014"
          contentStyle={{ background: Colors.darkest, color: Colors.middle }}
          iconStyle={{ background: Colors.darkest, color: Colors.middle }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            High School Diploma
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>
          <p>Mathematics</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          iconStyle={{ background: Colors.darkest, color: Colors.middle }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div >
  );
}

export default Experience;