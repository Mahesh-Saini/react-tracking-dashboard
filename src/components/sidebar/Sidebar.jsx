import React from "react";
import logo from "../../assets/logo.png";

const myTrackingData = [
  {
    header: "Tracking",
    options: [
      {
        url: "/",
        menuName: "Home",
      },
      {
        url: "/myt-tracking",
        menuName: "Tracking",
      },
      {
        url: "/in-transit",
        menuName: "In Transit",
      },
      {
        url: "/delay",
        menuName: "Delay",
      },
      {
        url: "/dealer-point",
        menuName: "Dealer Point",
      },
      {
        url: "/on-time",
        menuName: "On Time",
      },
    ],
  },

  {
    menuHeading: "New Entries",
    options: [
      {
        url: "/manage-user",
        menuName: "Add New Record",
      },
      {
        url: "/",
        menuName: "Permissions",
      },
    ],
  },
];
const mySettingsData = [
  {
    header: "Settings",
    options: [
      {
        url: "/myt-tracking",
        menuName: "Tracking",
      },
      {
        url: "/in-transit",
        menuName: "In Transit",
      },
      {
        url: "/delay",
        menuName: "Delay",
      },
      {
        url: "/dealer-point",
        menuName: "Dealer Point",
      },
      {
        url: "/on-time",
        menuName: "On Time",
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className="sticky-top">
      <nav
        className="bg-primary"
        style={{
          height: "56px",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={logo}
              alt="Logo"
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
            Transport
          </a>
        </div>
      </nav>
      <div
        className="overflow-auto"
        style={{
          minHeight: `calc(100vh - 56px)`,
          maxHeight: `calc(100vh - 56px)`,
        }}
      >
        <div
          class="accordion accordion-flush"
          id="accordionPanelsStayOpenExample"
        >
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                MY Transport
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              class="accordion-collapse collapse show"
            >
              <div class="accordion-body">
                {myTrackingData.map((item, i) => {
                  return (
                    <div className="" key={i}>
                      <span>{item.menuHeading}</span>
                      <ul>
                        {item.options.map((item, i) => {
                          return (
                            <a href={item.url} key={i}>
                              <li>{item.menuName}</li>
                            </a>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                Settings
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              class="accordion-collapse collapse"
            >
              <div class="accordion-body">
                {mySettingsData.map((item, i) => {
                  return (
                    <div className="" key={i}>
                      <span>{item.menuHeading}</span>
                      <ul>
                        {item.options.map((item, i) => {
                          return (
                            <a href={item.url} key={i}>
                              <li>{item.menuName}</li>
                            </a>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
