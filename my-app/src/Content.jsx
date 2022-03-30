import "./Content.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function Content() {
    return (
        <div className="Content">
            <Box sx={{ textAlign: "left" }} className="box1">
                <Grid container spacing={1}>
                    <Grid item xs={8}>
                        <Typography variant="h6" gutterBottom component="div">
                            From the Firehouse
                        </Typography>
                        <hr />
                        <Typography variant="h4" gutterBottom component="div">
                            Sample Blog Post
                        </Typography>
                        <Typography
                            variant="caption"
                            display="block"
                            gutterBottom
                        >
                            April 1, 2020 by <Link href="#">Oiliver</Link>
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            gutterBottom
                            component="div"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            gutterBottom
                            component="div"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </Typography>

                        <Typography variant="h5" gutterBottom component="div">
                            Heading
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            gutterBottom
                            component="div"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </Typography>
                        <br />
                        <Typography
                            variant="subtitle2"
                            gutterBottom
                            component="div"
                        >
                            Sub-heading 1
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            gutterBottom
                            component="div"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </Typography>
                        <br />
                        <Typography
                            variant="subtitle2"
                            gutterBottom
                            component="div"
                        >
                            Sub-heading 2
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            gutterBottom
                            component="div"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </Typography>
                        <br />
                        <br />
                        <Typography variant="h4" gutterBottom component="div">
                            New feature
                        </Typography>
                        <Typography
                            variant="caption"
                            display="block"
                            gutterBottom
                        >
                            March 14, 2020 by <Link href="#">Tom</Link>
                        </Typography>
                        <br />
                        <Typography
                            variant="subtitle2"
                            gutterBottom
                            component="div"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            gutterBottom
                            component="div"
                        >
                            <List>
                                <ListItem disablePadding>
                                    <ListItemText primary=" Lorem ipsum dolor sit amet" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary="consectetur adipiscing
                            elit, sed do eiusmod tempor."
                                    />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary="incididunt ut labore et
                            dolore magna aliqua"
                                    />
                                </ListItem>
                            </List>
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            gutterBottom
                            component="div"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            gutterBottom
                            component="div"
                        >
                            Donec ullamcorper nulla non metus auctor fringilla.
                            Nulla vitae elit libero, a pharetra augue.
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Box
                            sx={{
                                width: 300,
                                height: 150,
                                backgroundColor: "lightgray",
                                p: 3,
                            }}
                        >
                            <Typography
                                variant="h5"
                                gutterBottom
                                component="div"
                            >
                                About
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                gutterBottom
                                component="div"
                            >
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing
                            </Typography>
                        </Box>
                        <br />
                        <Typography variant="h5" gutterBottom component="div">
                            Achives
                        </Typography>
                        <Link href="#">March 2020</Link> <br />
                        <Link href="#">February 2020</Link>
                        <br />
                        <Link href="#">January 2020</Link>
                        <br />
                        <Link href="#">November 2020</Link>
                        <br />
                        <Link href="#">October 2020</Link>
                        <br />
                        <Link href="#">September 2020</Link>
                        <br />
                        <Link href="#">August 2020</Link>
                        <br />
                        <Link href="#">July 2020</Link>
                        <br />
                        <Link href="#">June 2020</Link>
                        <br />
                        <Link href="#">May 2020</Link>
                        <br />
                        <Link href="#">April 2020</Link>
                        <br />
                        <br />
                        <Typography variant="h5" gutterBottom component="div">
                            Social
                        </Typography>
                        <Box>
                            <GitHubIcon color="primary" />
                            <Link href="#">GitHub</Link>
                            <br />
                            <TwitterIcon color="primary" />
                            <Link href="#">Twitter</Link>
                            <br />
                            <FacebookIcon color="primary" />
                            <Link href="#">Facebook</Link>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}
