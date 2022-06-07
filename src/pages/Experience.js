import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import StarIcon from '@mui/icons-material/Star';

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#0F343E">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - present"
          contentStyle={{ background: "#0F343E", color: "#C5DA8D" }}
          iconStyle={{ background: "#0F343E", color: "#C5DA8D" }}
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
          contentStyle={{ background: "#0F343E", color: "#C5DA8D" }}
          iconStyle={{ background: "#0F343E", color: "#C5DA8D" }}
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
          contentStyle={{ background: "#0F343E", color: "#C5DA8D" }}
          iconStyle={{ background: "#0F343E", color: "#C5DA8D" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            University of Windsor
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Master's Degree
          </h4>

          <p> Applied Computing </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2018"
          contentStyle={{ background: "#0F343E", color: "#C5DA8D" }}
          iconStyle={{ background: "#0F343E", color: "#C5DA8D" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Islamic Azad University
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>
          <p>IT Engineering</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2010 - 2014"
          contentStyle={{ background: "#0F343E", color: "#C5DA8D" }}
          iconStyle={{ background: "#0F343E", color: "#C5DA8D" }}
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
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div >
  );
}

export default Experience;