import { Box, useMediaQuery, useTheme, Container, styled } from "@mui/material"
import { Menu } from '@mui/icons-material';
import { useState } from "react";
import { DarkModeSwitch } from "./DarkMode";

const Keyframes = styled(Menu)({

    animation: "reversepulsate 1s 1 ease-in-out",
    "&:hover": {
        "@keyframes pulsate": {
            "0% ": {
                transform: "rotate(0deg) scale(1)"
            },
            "50% ": {
                transform: "rotate(180deg) scale(1.25)"
            },
            "100%": {
                transform: "rotate(360deg) scale(1)"
            }
        },
        animation: "pulsate 1s 1 ease-in-out",
    },
});


const Navbar = () => {
    const { palette } = useTheme()
    const isNonMobileScreen = useMediaQuery("(min-width:900px)")
    const [isMenuToggled, setIsMenuToggled] = useState(false)
    const [mode, setMode] = useState("dark")
    console.log("state", isMenuToggled)


    window.addEventListener("click", (e) => {
        if (e.target.id !== "navbarModal" && e.target.id !== "modeSwitch") {
            setIsMenuToggled(false);
        }
    });


    return (
        <Box

            display="flex"
            height="100%"
            justifyContent="space-between"
            backgroundColor={palette.secondary.main}
            alignItems="center"
        >
            <Box>
                Logo
            </Box>
            {
                isNonMobileScreen ? (
                    <>

                        <Box display="flex" justifyContent="" alignItems="center " gap="1rem">
                            <Box>
                                Home
                            </Box>
                            <Box>
                                About
                            </Box>
                            <Box>
                                Portfolio
                            </Box>
                            <Box>
                                Contact
                            </Box>
                        </Box >
                    </>
                ) : (
                    <>
                        <Keyframes
                            id="navbarModal"
                            onClick={() => setIsMenuToggled(!isMenuToggled)} sx={isMenuToggled && { display: "none" }} />
                        {isMenuToggled && (
                            <>
                                <Box
                                    position="absolute"
                                    top="0"
                                    right="0"
                                    height="240px"
                                    backgroundColor={palette.third.light}
                                    padding="2rem"
                                    display="flex"
                                    flexDirection="column"
                                    alignItems="center"
                                    gap="1rem"
                                    color={palette.primary.dark}
                                    fontWeight="700"
                                    width="200px"
                                    borderRadius="0 0 0 20%"
                                >
                                    <Box >
                                        <DarkModeSwitch id="modeSwitch" onClick={() => setMode(!mode)} palette={palette} />
                                    </Box>
                                    <Box>Home</Box>
                                    <Box>About</Box>
                                    <Box>Portfolio</Box>
                                    <Box>Contact</Box>
                                </Box>
                            </>
                        )}
                    </>
                )
            }

        </Box>
    )
}
export default Navbar