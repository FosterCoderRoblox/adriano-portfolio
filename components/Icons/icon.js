import {
  IconMail,
  IconYoutube,
  IconDiscord,
  IconRoblox,
  IconExternal,
} from "@/components/Icons";

const Icon = ({ name }) => {
  switch (name) {
    case "mail":
      return <IconMail />;
    case "youtube":
      return <IconYoutube />;
    case "discord":
      return <IconDiscord />;
    case "roblox":
      return <IconRoblox />;
    default:
      return <IconExternal />;
  }
};

export default Icon;
