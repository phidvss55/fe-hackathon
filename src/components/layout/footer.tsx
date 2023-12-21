/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/react-in-jsx-scope */
import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";
import { HeartIcon } from "@heroicons/react/24/solid";

interface ComponentProps {
  brandName: any;
  brandLink: any;
  routes: any;
}

type Props = ComponentProps;
const Footer: React.FunctionComponent<Props> = (props) => {
  // export function Footer({ brandName, brandLink, routes }) {
  const year = new Date().getFullYear();

  return (
    <footer className={"py-2"}>
      <div
        className={
          "flex w-full flex-wrap items-center justify-center gap-6 px-2 md:justify-between"
        }
      >
        <Typography variant={"small"} className={"font-normal text-inherit"}>
          {`&copy; ${year}, made with`}
          <HeartIcon className={"-mt-0.5 inline-block h-3.5 w-3.5"} />
          {"by"}
          <a
            href={props.brandLink}
            target={"_blank"}
            className={"transition-colors hover:text-blue-500"}
            rel={"noreferrer"}
          >
            {props.brandName}
          </a>
          {"for a better web."}
        </Typography>
        <ul className={"flex items-center gap-4"}>
          {props.routes.map(({ name, path }: any) => (
            <li key={name}>
              <Typography
                as={"a"}
                href={path}
                target={"_blank"}
                variant={"small"}
                className={
                  "py-0.5 px-1 font-normal text-inherit transition-colors hover:text-blue-500"
                }
              >
                {name}
              </Typography>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

Footer.defaultProps = {
  brandName: "Creative Tim",
  brandLink: "https://www.creative-tim.com",
  routes: [
    { name: "Creative Tim", path: "https://www.creative-tim.com" },
    { name: "About Us", path: "https://www.creative-tim.com/presentation" },
    { name: "Blog", path: "https://www.creative-tim.com/blog" },
    { name: "License", path: "https://www.creative-tim.com/license" },
  ],
};

Footer.propTypes = {
  brandName: PropTypes.string,
  brandLink: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
};

// Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
