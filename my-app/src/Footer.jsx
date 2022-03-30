import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import * as React from "react";
import Typography from "@mui/material/Typography";

function Footer() {
    return (
        <div className="Footer">
            <Box>
                <BottomNavigation>
                    <Typography variant="h5" gutterBottom component="div">
                        Footer
                        <Typography
                            variant="caption"
                            display="block"
                            gutterBottom
                        >
                            Something here give a footer a purpose
                            <br />
                            Copyright Ⓒ
                            <a href="" className="footerlink">
                                Your Website
                            </a>{" "}
                            2022
                        </Typography>
                    </Typography>
                    <br />
                </BottomNavigation>
            </Box>
        </div>
    );
}
export default Footer;
