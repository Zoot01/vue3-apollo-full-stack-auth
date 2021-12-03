<template>
    <div
        class="w-full h-full flex flex align-items-center justify-content-center"
    >
        <div
            class="shadow-2 border-round w-min h-min min-w-max min-h-max surface-50 flex flex-column flex-nowrap align-items-center p-2"
        >
            <div class="text-3xl uppercase mt-2 font-semibold text-primary">
                Login
            </div>
            <form
                class="p-3 flex flex-column h-full"
                @submit.prevent="submitLogin(!v$.$invalid)"
            >
                <div class="col-12 md-4 mb-2">
                    <div class="p-inputgroup">
                        <span class="p-inputgroup-addon">
                            <i class="pi pi-at"></i>
                        </span>
                        <span class="p-float-label">
                            <InputText
                                id="email"
                                type="email"
                                v-model="v$.email.$model"
                                name="email"
                                :class="{
                                    'p-invalid': v$.email.$invalid && submitted,
                                }"
                            />
                            <label for="email">Email</label>
                        </span>
                    </div>
                    <small
                        v-if="v$.email.$invalid && submitted"
                        class="text-xs p-error"
                    >
                        {{
                            v$.email.required.$message.replace('Value', 'Email')
                        }}
                    </small>
                </div>

                <div class="col-12 md-4 mb-2">
                    <div class="p-inputgroup">
                        <span class="p-inputgroup-addon">
                            <i class="pi pi-lock"></i>
                        </span>
                        <span class="p-float-label">
                            <Password
                                id="password"
                                v-model="v$.password.$model"
                                toggleMask
                                :feedback="false"
                                name="password"
                                :class="{
                                    'p-invalid':
                                        v$.password.$invalid && submitted,
                                }"
                            />
                            <label for="password">Password</label>
                        </span>
                    </div>
                    <small
                        v-if="v$.password.$invalid && submitted"
                        class="text-xs p-error"
                    >
                        {{
                            v$.password.required.$message.replace(
                                'Value',
                                'Password'
                            )
                        }}
                    </small>
                </div>

                <div class="text-base mb-2 text-center">
                    Need to register an account?
                    <a href="register" class="no-underline">Click Here</a>
                </div>

                <div class="text-xs mb-2 text-center">
                    Trouble logging in?
                    <a href="#" class="no-underline">Reset Password</a>
                </div>

                <Button
                    type="submit"
                    label="Login"
                    class="p-button-outlined mt-2"
                />
            </form>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, computed } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'

export default defineComponent({
    name: 'Login',
    components: {},
    setup() {
        const submitted = ref(false)
        const state = reactive({
            email: '',
            password: '',
            accept: null,
        })
        const submitLogin = (isFormValid: any) => {
            submitted.value = true
            if (!isFormValid) {
                return
            }
            console.log('success')
            submitted.value = false
            resetLoginForm()
        }

        const resetLoginForm = () => {
            state.email = ''
            state.password = ''
        }

        const rules = computed(() => ({
            email: {
                required,
            },
            password: {
                required,
            },
        }))

        const v$ = useVuelidate(rules, state)

        return {
            submitLogin,
            v$,
            submitted,
        }
    },
})
</script>

<style lang="scss" scoped></style>
