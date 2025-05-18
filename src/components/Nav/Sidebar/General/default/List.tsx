import { NavLinksInterface } from "@/types/lib/nav";
import { Box, Collapsible } from "@chakra-ui/react";
import LinkSidebar from "./Link";

interface IListSidebar{
    link: NavLinksInterface
}

const ListSidebar: React.FC<IListSidebar> = (props) => {
    const { link } = props;
    
    return (
        <li>
            {link.hasOwnProperty("submenu") && Array.isArray(link.submenu) ? (
                <Collapsible.Root>
                    <LinkSidebar link={link} />
                    <Collapsible.Content>
                        <Box as="ul" listStyleType="none">
                        {link.submenu.map((submenuLink, index) => (
                            <ListSidebar key={index} link={submenuLink} />
                        ))}
                        </Box>
                    </Collapsible.Content>
                </Collapsible.Root>
            ) : (
                <LinkSidebar link={link} />
            )}
        </li>
    );
}

export default ListSidebar;