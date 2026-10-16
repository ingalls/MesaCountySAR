<template>
    <div>
        <div class='d-flex align-items-center mb-3'>
            <div class='text-secondary'>
                {{ checkedCount }} of {{ total }} items checked
            </div>
            <div class='progress progress-sm flex-grow-1 mx-3'>
                <div
                    class='progress-bar'
                    role='progressbar'
                    :style='{ width: `${Math.round(checkedCount / total * 100)}%` }'
                />
            </div>
            <button
                type='button'
                class='btn btn-sm btn-ghost-secondary d-print-none'
                :disabled='!checkedCount'
                @click='reset'
            >
                Reset
            </button>
        </div>
        <div class='row g-3'>
            <div
                v-for='group in gear'
                :key='group.name'
                class='col-md-6'
            >
                <div class='card h-100'>
                    <div class='card-header'>
                        <h4 class='card-title'>
                            {{ group.name }}
                        </h4>
                    </div>
                    <div class='list-group list-group-flush'>
                        <label
                            v-for='item in group.items'
                            :key='item.id'
                            class='list-group-item d-flex gap-2 gear-item'
                            :class='{ "gear-item-checked": checked[item.id] }'
                        >
                            <input
                                type='checkbox'
                                class='form-check-input mt-1 flex-shrink-0'
                                :checked='!!checked[item.id]'
                                @change='toggle(item.id, $event.target.checked)'
                            >
                            <span>
                                <span class='strong me-1'>
                                    <a
                                        v-if='item.url'
                                        :href='item.url'
                                        target='_blank'
                                        rel='noopener'
                                    >{{ item.label }}</a>
                                    <template v-else>{{ item.label }}</template>
                                </span>
                                <span
                                    v-if='item.detail'
                                    class='text-secondary'
                                >
                                    {{ item.detail }}
                                </span>
                                <span
                                    v-if='item.example'
                                    class='text-secondary'
                                >
                                    (ie: <a
                                        :href='item.example.url'
                                        target='_blank'
                                        rel='noopener'
                                    >{{ item.example.label }}</a>, etc)
                                </span>
                            </span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import gear from './gear.js';

const STORAGE_KEY = 'mcsar-pm-gear';

function load() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch {
        return {};
    }
}

function save(value) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
    } catch {
        return;
    }
}

const checked = ref(load());
const total = gear.reduce((sum, group) => sum + group.items.length, 0);
const checkedCount = computed(() => Object.values(checked.value).filter(Boolean).length);

function toggle(id, value) {
    checked.value = { ...checked.value, [id]: value };
    save(checked.value);
}

function reset() {
    checked.value = {};
    save(checked.value);
}
</script>

<style scoped>
.gear-item {
    cursor: pointer;
}

.gear-item-checked .strong {
    text-decoration: line-through;
    color: var(--tblr-secondary);
}
</style>
