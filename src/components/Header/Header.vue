<template>
    <header class="bg-gray-400 shadow-lg flex justify-between items-center px-20 py-7">
        <div>
            <RouterLink to="/">LOGO</RouterLink>
        </div>
        <div>
            <nav>
                <ul class="flex gap-6">
                    <li>
                        <RouterLink to="/">Головна</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="#">Навчання</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="#">Новини і події</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/gallary">Галерея</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="#">Про школу</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="#">Контакти</RouterLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>