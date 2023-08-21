<script setup>
    import { sendAuthorizationStore } from '../../lib/stores/sendAuthorization.store';
    import Session from '../../lib/Service/Session/Session';
    import * as Yup from 'yup';
    import {Form, Field} from 'vee-validate';

    const schema = Yup.object().shape({
        email: Yup.string().required('Email is required'),
        password: Yup.string().required('Password is required')
    });

    const sendAuth = sendAuthorizationStore();
    async function onSubmit(data) {
        sendAuth.sendAuth(data);
    }

</script>

<template>
    <div class="d-flex">
        <div class="create-block" data-aos="fade-left" data-aos-delay="150">
            <div class="mb-4">
                <h4 class="text-create-header">Sign In to MusicBox</h4>
                <div class="img-create-wrap mt-3 mb-3">
                    <img src="../../assets/icons/mbox_facebook.png" class="img-create-facebook">
                    <img src="../../assets/icons/mbox_google.png" class="img-create-google">
                </div>
                <p class="text-create-desc">or use email for registration</p>
            </div>
            <div class="create-wrap">
                <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors, isSubmitting }">
                    <div class="form-group">
                        <img src="../../assets/icons/mbox_email.png" class="img-form-control">
                        <Field name="email" 
                            type="email" 
                            class="form-control" 
                            :placeholder="'Email'" 
                            :class="{ 'is-invalid': errors.email }" />
                        <div class="invalid-feedback">{{ errors.email }}</div>
                    </div>
                    <div class="form-group">
                        <img src="../../assets/icons/mbox_password.png" class="img-form-control">
                        <Field  name="password" 
                            type="password" 
                            class="form-control" 
                            :placeholder="'Password'" 
                            :class="{ 'is-invalid': errors.password }" />
                        <div class="invalid-feedback">{{ errors.password }}</div>
                    </div>
                    <div class="d-flex justify-content-end m-0 p-0">
                        <p class="text-control-fogot">fogot your password?</p>
                    </div>
                    <div class="form-group d-flex justify-content-center mt-4">
                    <button class="bttn-sign" :disabled="isSubmitting">
                        Sign In
                    </button>
                    </div>
                </Form>
            </div>
        </div>     
        <div class="welckom-bg-block">
            <img src="../../assets/icons/mbox_background_1.png" class="img-gb-welckom">
            <div class="welckom-gb-wrap"  data-aos="fade-down" data-aos-delay="150">
                <p class="text-welcom-header text-white">Hello, Friend</p>
                <p class="text-welcom-desc text-white">
                    Enter your personal details<br>
                    and start listen music with us
                </p>
                <div class="bttn-welckom-wrap">
                    <button class="bttn-welckom-auth">
                        <router-link to="/SignIn" class="text-white">Sign Up</router-link>
                    </button>
                </div>
            </div>
        </div> 
    </div>
</template>

<style>

</style>