import React from 'react';
import {useFormik} from "formik";
import {TextField} from "@mui/material";
import Box from "@mui/material/Box";
import classes from "../About/AboutProfile/AboutProfile.module.css";
import MyCustomButton from "../../MUI/MyCustomButton";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


const UserDataForm = (props) => {

    const formik = useFormik({
        initialValues: {
            contacts: {
                facebook: '',
                website:'',
                vk:'',
                twitter:"",
                instagram:"",
                youtube:"",
                github:"",
                mainLink:""
            },
            fullName:'',
            lookingForAJob: false,
            lookingForAJobDescription:''


        },

        onSubmit: values => {
            props.saveData(formik.values);
        },
    });

    return (
        <>
            <Box onSubmit={formik.handleSubmit} className={classes.dataForm}
                 component="form"
                 sx={{
                     '& > :not(style)': {m: 1, width: '20ch'},
                 }}
                 noValidate
                 autoComplete="off"
            >
                <TextField
                    label="Name:"
                    id="fullName"
                    size="small"
                    variant="standard"
                    name="fullName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.fullName}
                />
                <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">Looking for a job:</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name={props.profile.lookingForAJob}
                    >
                        <FormControlLabel value='yes' control={<Radio />} label="Yes" />
                        <FormControlLabel value='no' control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>

                <TextField
                    label="My professional skills:"
                    id="skills"
                    size="small"
                    variant="standard"
                    name="lookingForAJobDescription"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.lookingForAJobDescription}
                />

                {Object.keys(props.profile.contacts).map(key => {

                    return (
                            <TextField
                                label={key}
                                id="social"
                                size="small"
                                variant="standard"
                                name={`contacts.${key}`}
                                type="text"
                                key={key}
                                onChange={formik.handleChange}
                                value={formik.values[key]}
                            />
                        )})}

                <TextField
                    label="About me:"
                    id="aboutMe"
                    size="small"
                    variant="standard"
                    name="aboutMe"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.address}
                />

                {formik.isSubmitting ?
                    <MyCustomButton type="submit"
                                    className={"sendButtonDisabled"}
                                    disabled={true}

                    >Save</MyCustomButton>

                    : <MyCustomButton type="submit" className={"loginButton"} disabled={false}
                    >Save</MyCustomButton>}
            </Box>
        </>
    );
};

export default UserDataForm;