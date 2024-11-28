<script setup>
import grades from "../data/grades";
</script>

<template>
    <!-- Grades Section Start -->
    <div id="subscribe-section" class="container mx-auto px-5 md:w-4/5">
        <section class="py-16 pt-18">
            <div class="w-4/5 md:w-3/5 mx-auto">
                <h2 class="text-3xl md:text-4xl font-theme-heading font-medium text-center">Venha treinar conosco</h2>
                <p class="text-theme-grayish-blue text-center text-lg font-theme-content mt-7">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, tempore error officiis quod voluptatem neque perspiciatis quibusdam illo autem! Quisquam rerum reiciendis ipsa veniam quis dolor, quam ab officia repellat?</p>
            </div>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                <div v-for="(grade, index) in grades" :key="grade.id" :class="[index === 0 ? 'lg:mb-10' : '', index === 1 ? 'lg:mt-10' : '', index === 2 ? 'lg:mt-20 lg:-mb-10' : '']" class="shadow-lg rounded-lg">
                    <div class="flex justify-center mt-12">
                        <img :src="grade.icon" alt="Browser Logo" />
                    </div>
                    <h3 class="text-2xl font-theme-heading font-medium text-center mt-6">{{ grade.title }}</h3>
                    <p class="text-md font-theme-content text-theme-grayish-blue text-center mt-3">{{ grade.subTitle }}</p>
                    <div class="my-7">
                        <img class="w-full" src="/images/bg-dots.svg" alt="Dot Backaground" />
                    </div>
                    <div class="flex justify-center mb-8">
                        <LinkButton btn-type="primary" :link="grade.link" class="text-sm">Mais informações</LinkButton>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <!-- Grade Section End -->
</template>
