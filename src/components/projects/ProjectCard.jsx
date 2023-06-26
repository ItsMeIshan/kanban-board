import { Avatar, AvatarGroup } from "@mui/material";
import { userIcon } from "../../utils/constants";
import { Link } from "react-router-dom";

function ProjectCard(props) {
  return (
    <div className="max-w-sm w-full border-[#787486] border rounded-lg p-2 m-1">
      <Link to={`/project/${props?.title.replaceAll(" ", "-")}`}>
        <h3 className="font-semibold text-lg text-[#0D062D]">{props?.title}</h3>
      </Link>
      <p className="text-[#787486] text-md">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
        fugiat ipsum explicabo deserunt, eveniet minus recusandae nemo.
      </p>
      <div>
        <AvatarGroup max={props?.collaborators?.length}>
          {props?.collaborators?.map((item, idx) => {
            return (
              <Avatar
                key={idx}
                sx={{ width: 24, height: 24 }}
                alt={item}
                src={userIcon}
              />
            );
          })}

          {/* <Avatar
            sx={{ width: 24, height: 24 }}
            alt="Travis Howard"
            src={userIcon}
          />
          <Avatar
            sx={{ width: 24, height: 24 }}
            alt="Agnes Walker"
            src={userIcon}
          />
          <Avatar
            sx={{ width: 24, height: 24 }}
            alt="Trevor Henderson"
            src={userIcon}
          /> */}
        </AvatarGroup>
        {/* <div>

            <div></div>
        </div> */}
      </div>
    </div>
  );
}

export default ProjectCard;
