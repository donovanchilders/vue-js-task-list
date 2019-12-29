<template>
    <div id="app">
        <Header />
        <main class="container">
            <TaskList />
        </main>
    </div>
</template>

<script>
import Header from "./components/Header";
import TaskList from './components/Tasks/List';

export default {
    name: "app",
    components: {
        Header,
        TaskList
    }
};
</script>
