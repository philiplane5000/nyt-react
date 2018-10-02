import React from "react";
import Grid from "@material-ui/core/Grid";

const MaterialGrid = props => (
    <Grid {...props}>
            {props.children}
    </Grid>
)

export default MaterialGrid;

