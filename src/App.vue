<template>
    <div id="app">
        <Header />
        <main class="bg-white">
            <div class="container py-4">
                <TaskList />
            </div>
        </main>
        <Footer />
    </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskList from './components/Tasks/List';

export default {
    name: "app",
    components: {
        Header,
        TaskList,
        Footer
    }
};
</script>
