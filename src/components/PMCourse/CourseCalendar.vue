<template>
    <div class='row g-3'>
        <div
            v-for='month in months'
            :key='month.key'
            class='col-lg-6'
        >
            <div class='card'>
                <div class='card-header justify-content-center'>
                    <h3 class='card-title'>
                        {{ month.label }}
                    </h3>
                </div>
                <div class='course-calendar'>
                    <div
                        v-for='day in weekdays'
                        :key='day'
                        class='course-calendar-weekday'
                    >
                        {{ day }}
                    </div>
                    <div
                        v-for='cell in month.cells'
                        :key='cell.key'
                        class='course-calendar-day'
                        :role='cell.event ? "button" : undefined'
                        :tabindex='cell.event ? 0 : undefined'
                        :class='{
                            "course-calendar-clickable": cell.event,
                            "course-calendar-blank": !cell.day,
                            "course-calendar-event": cell.event && !isBreak(cell.event),
                            "course-calendar-highlight": cell.event && cell.event.highlight,
                            "course-calendar-break": cell.event && isBreak(cell.event)
                        }'
                        @click='cell.event && (selected = cell.event)'
                        @keydown.enter='cell.event && (selected = cell.event)'
                    >
                        <template v-if='cell.day'>
                            <div class='course-calendar-number'>
                                {{ cell.day }}
                            </div>
                            <div
                                v-if='cell.event'
                                v-tooltip='cell.event.time ? cell.event.topic + " · " + cell.event.time : cell.event.topic'
                                class='course-calendar-topic'
                            >
                                <component
                                    :is='cell.event.icon'
                                    v-if='cell.label || !isBreak(cell.event)'
                                    :size='14'
                                    stroke='1.5'
                                    class='course-calendar-marker'
                                />
                                <span
                                    v-if='cell.label'
                                    class='course-calendar-label'
                                >{{ cell.event.topic }}</span>
                            </div>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <TablerModal
        v-if='selected'
        size='lg'
        dismissable
        @close='selected = null'
    >
        <div class='modal-header'>
            <div class='modal-title d-flex align-items-center'>
                <component
                    :is='selected.icon'
                    :size='24'
                    stroke='1.5'
                    class='me-2'
                    :class='selected.highlight ? "text-red" : "text-primary"'
                />
                {{ selected.topic }}
            </div>
            <button
                type='button'
                class='btn-close'
                aria-label='Close'
                @click='selected = null'
            />
        </div>
        <div class='modal-body'>
            <div
                v-if='isBreak(selected)'
                class='d-flex align-items-center gap-2'
            >
                <IconCalendarEvent
                    :size='18'
                    stroke='1.5'
                />
                {{ longDate(selected.date) }} - {{ longDate(selected.end) }}
            </div>
            <template v-else>
                <div class='d-flex align-items-center gap-2 mb-1'>
                    <IconCalendarEvent
                        :size='18'
                        stroke='1.5'
                    />
                    {{ weekday(selected.date) }}, {{ longDate(selected.date) }}
                </div>
                <div class='d-flex align-items-center gap-2 mb-1'>
                    <IconClock
                        :size='18'
                        stroke='1.5'
                    />
                    {{ selected.time }}
                </div>
                <div class='d-flex align-items-center gap-2 mb-3'>
                    <IconMapPin
                        :size='18'
                        stroke='1.5'
                    />
                    <a
                        v-if='selected.location.url'
                        :href='selected.location.url'
                        target='_blank'
                    >{{ selected.location.name }}</a>
                    <span v-else>{{ selected.location.name }}</span>
                </div>
                <div class='text-secondary'>
                    {{ selected.description }}
                    <template v-if='selected.links'>
                        <a
                            v-for='link in selected.links'
                            :key='link.url'
                            :href='link.url'
                            target='_blank'
                            class='ms-1'
                        >{{ link.label }}</a>
                    </template>
                </div>
            </template>
        </div>
        <div class='modal-footer'>
            <button
                type='button'
                class='btn btn-primary ms-auto'
                @click='selected = null'
            >
                Close
            </button>
        </div>
    </TablerModal>
</template>

<script setup>
import { ref, computed } from 'vue';
import { TablerModal } from '@tak-ps/vue-tabler';
import { IconCalendarEvent, IconClock, IconMapPin } from '@tabler/icons-vue';
import { parseDate, isBreak, weekday, longDate } from './schedule.js';

const props = defineProps({
    events: {
        type: Array,
        required: true
    }
});

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const selected = ref(null);

function isoDate(date) {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

const months = computed(() => {
    const byDate = new Map();
    for (const event of props.events) {
        const last = parseDate(event.end || event.date);
        for (const day = parseDate(event.date); day <= last; day.setDate(day.getDate() + 1)) {
            byDate.set(isoDate(day), event);
        }
    }
    const keys = [...new Set([...byDate.keys()].map((iso) => iso.slice(0, 7)))].sort();

    return keys.map((key) => {
        const [year, month] = key.split('-').map(Number);
        const first = new Date(year, month - 1, 1);
        const daysInMonth = new Date(year, month, 0).getDate();
        const cells = [];

        for (let i = 0; i < first.getDay(); i++) {
            cells.push({ key: `${key}-blank-${i}` });
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const iso = `${key}-${String(day).padStart(2, '0')}`;
            const event = byDate.get(iso);
            const label = event && (event.date === iso || new Date(year, month - 1, day).getDay() === 0);
            cells.push({ key: iso, day, event, label });
        }

        return {
            key,
            label: first.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
            cells
        };
    });
});
</script>

<style scoped>
.course-calendar {
    display: grid;
    grid-template-columns: repeat(7, minmax(0, 1fr));
    border-top: 1px solid var(--tblr-border-color);
}

.course-calendar-weekday {
    padding: 0.5rem 0;
    text-align: center;
    font-size: 0.75rem;
    text-transform: uppercase;
    color: var(--tblr-secondary);
    border-bottom: 1px solid var(--tblr-border-color);
}

.course-calendar-day {
    min-height: 4.5rem;
    padding: 0.25rem;
    border-right: 1px solid var(--tblr-border-color);
    border-bottom: 1px solid var(--tblr-border-color);
    overflow: hidden;
}

.course-calendar-day:nth-child(7n) {
    border-right: 0;
}

.course-calendar-blank {
    background: var(--tblr-bg-surface-secondary);
}

.course-calendar-clickable {
    cursor: pointer;
}

.course-calendar-clickable:hover,
.course-calendar-clickable:focus-visible {
    outline: 2px solid var(--tblr-primary);
    outline-offset: -2px;
}

.course-calendar-event {
    background: var(--tblr-primary-lt);
}

.course-calendar-highlight {
    background: var(--tblr-red-lt);
}

.course-calendar-break {
    background: repeating-linear-gradient(
        -45deg,
        var(--tblr-bg-surface-secondary),
        var(--tblr-bg-surface-secondary) 6px,
        var(--tblr-bg-surface) 6px,
        var(--tblr-bg-surface) 12px
    );
}

.course-calendar-break .course-calendar-topic {
    color: var(--tblr-secondary);
}

.course-calendar-number {
    font-size: 0.8rem;
    color: var(--tblr-secondary);
}

.course-calendar-event .course-calendar-number {
    font-weight: 600;
    color: var(--tblr-body-color);
}

.course-calendar-topic {
    display: flex;
    align-items: flex-start;
    gap: 0.25rem;
    margin-top: 0.25rem;
    font-size: 0.75rem;
    line-height: 1.2;
}

.course-calendar-marker {
    flex: 0 0 auto;
    color: var(--tblr-primary);
}

.course-calendar-highlight .course-calendar-marker {
    color: var(--tblr-red);
}

.course-calendar-break .course-calendar-marker {
    color: var(--tblr-secondary);
}

.course-calendar-label {
    hyphens: auto;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

@media (max-width: 575.98px) {
    .course-calendar-day {
        min-height: 3rem;
    }

    .course-calendar-label {
        display: none;
    }
}
</style>
