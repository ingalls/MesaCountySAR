<template>
    <div class='course-timeline'>
        <div
            v-for='event in events'
            :key='event.date + event.topic'
            class='course-event'
            :class='{
                "course-event-highlight": event.highlight,
                "course-event-break": isBreak(event)
            }'
        >
            <div class='course-event-dot' />
            <div
                v-if='isBreak(event)'
                class='text-secondary d-flex align-items-center flex-wrap'
            >
                <component
                    :is='event.icon'
                    :size='18'
                    stroke='1.5'
                    class='me-2'
                />
                <span class='strong me-2'>{{ event.topic }}</span>
                <span>{{ longDate(event.date) }} - {{ longDate(event.end) }}</span>
            </div>
            <div
                v-else
                class='row g-2'
            >
                <div class='col-md-3'>
                    <div class='strong'>
                        {{ weekday(event.date) }}
                    </div>
                    <div>{{ longDate(event.date) }}</div>
                    <div class='small text-secondary d-flex align-items-center gap-1 mt-1'>
                        <IconClock
                            :size='14'
                            stroke='1'
                        />
                        {{ event.time }}
                    </div>
                    <div class='small text-secondary d-flex align-items-center gap-1 mt-1'>
                        <IconMapPin
                            :size='14'
                            stroke='1'
                            class='flex-shrink-0'
                        />
                        <a
                            v-if='event.location.url'
                            :href='event.location.url'
                            target='_blank'
                            rel='noopener'
                        >{{ event.location.name }}</a>
                        <span v-else>{{ event.location.name }}</span>
                    </div>
                </div>
                <div class='col-md-9'>
                    <div class='strong d-flex align-items-center'>
                        <component
                            :is='event.icon'
                            :size='20'
                            stroke='1.5'
                            class='me-2 flex-shrink-0'
                            :class='event.highlight ? "text-red" : "text-primary"'
                        />
                        {{ event.topic }}
                    </div>
                    <div class='text-secondary'>
                        {{ event.description }}
                        <template v-if='event.links'>
                            <a
                                v-for='link in event.links'
                                :key='link.url'
                                :href='link.url'
                                target='_blank'
                                rel='noopener'
                                class='ms-1'
                            >{{ link.label }}</a>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { IconClock, IconMapPin } from '@tabler/icons-vue';
import { isBreak, weekday, longDate } from './schedule.js';

defineProps({
    events: {
        type: Array,
        required: true
    }
});
</script>

<style scoped>
.course-timeline {
    position: relative;
    padding-left: 2rem;
}

.course-timeline::before {
    content: '';
    position: absolute;
    left: 0.5rem;
    top: 0.5rem;
    bottom: 0.5rem;
    width: 2px;
    background: var(--tblr-border-color);
}

.course-event {
    position: relative;
    padding-bottom: 1.5rem;
    break-inside: avoid;
}

.course-event:last-child {
    padding-bottom: 0;
}

.course-event-dot {
    position: absolute;
    left: calc(-2rem + 0.5rem + 1px - 8px);
    top: 0.25rem;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--tblr-primary);
    border: 3px solid var(--tblr-bg-surface);
    box-shadow: 0 0 0 2px var(--tblr-primary);
}

.course-event-highlight .course-event-dot {
    background: var(--tblr-red);
    box-shadow: 0 0 0 2px var(--tblr-red);
}

.course-event-break .course-event-dot {
    background: var(--tblr-bg-surface);
    box-shadow: 0 0 0 2px var(--tblr-secondary);
}
</style>
