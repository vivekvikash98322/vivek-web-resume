import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

export const ContactMe = (data: any) => {
  return (
    <Dialog open>
      <DialogTrigger>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            {data.title}
          </NavigationMenuLink>
        </NavigationMenuItem>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure absolutely sure?</DialogTitle>
          <DialogDescription>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};


/**
 * {openMenu && (
        <NavigationMenu
          className={`w-max`}
          id="navbar-default"
        >
          <NavigationMenuList className="grid grid-cols-1 w-max text-center">
            {components
              ?.filter((ele) => !ele.exclude)
              ?.map((data) => {
                return (
                  <NavigationMenuItem key={title} className="text-3xl font-bold w-max">
                    <Link href={data?.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        style={{fontSize: '900'}}
                        onSelect={() => handleSelect(data)}
                        active={selected === data.title}
                        className={navigationMenuTriggerStyle()}
                      >
                        {data.title}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                );
              })}
          </NavigationMenuList>
        </NavigationMenu>
      )}
 */