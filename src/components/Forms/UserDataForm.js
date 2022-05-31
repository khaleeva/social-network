import React from 'react';
import {useFormik} from "formik";
import {Checkbox, FormGroup, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import classes from "../About/AboutProfile/AboutProfile.module.css";
import MyCustomButton from "../../MUI/MyCustomButton";
import FormControlLabel from '@mui/material/FormControlLabel';


const UserDataForm = (props) => {

    console.log( props.profile.lookingForAJobDescription)

    const formik = useFormik({
        initialValues: {
            contacts: {
                facebook: props.profile.contacts.facebook,
                website: props.profile.contacts.website,
                vk: props.profile.contacts.vk,
                twitter: props.profile.contacts.twitter,
                instagram: props.profile.contacts.instagram,
                youtube: props.profile.contacts.youtube,
                github: props.profile.contacts.github,
                mainLink: props.profile.contacts.mainLink
            },
            fullName: props.profile.fullName,
            lookingForAJob: props.profile.lookingForAJob,
            lookingForAJobDescription: props.profile.lookingForAJobDescription,
            aboutMe: props.profile.aboutMe
        },


        onSubmit: values => {

            props.saveData(formik.values)
            props.deactivateEditMode();
        },
    });




    return (
        <>
            <Box onSubmit={formik.handleSubmit} className={classes.dataForm}
                 component="form"
                 sx={{
                     '& > :not(style)': {m: 1, width: '70%'},
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

                <FormGroup>
                    <FormControlLabel
                        sx={{color: '#50b5ff'}}
                        label="Is looking for a job"
                        control={
                            <Checkbox
                                id='lookingForAJob'
                                value={formik.values.lookingForAJob}
                                name='lookingForAJob'
                                onChange={formik.handleChange}

                            />

                        }/>

                </FormGroup>


                <TextField
                    label="My professional skills:"
                    id="lookingForAJobDescription"
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
                            id={`contacts.${key}`}
                            size="small"
                            variant="standard"
                            name={`contacts.${key}`}
                            type="text"
                            key={key}
                            onChange={formik.handleChange}
                            value={formik.values[key]}
                        />
                    )
                })}

                <TextField
                    label="About me:"
                    id="aboutMe"
                    size="small"
                    variant="standard"
                    name="aboutMe"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.aboutMe}
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