<template>
    <div class='page page-center'>
        <Call911 />

        <PageHeader label='Gallery' />

        <div class='page-wrapper'>
            <div class='page-body'>
                <div class='container-xl'>
                    <div class='row row-cards mb-6'>
                        <div class='alert alert-danger d-flex'>
                            <div>
                                <IconAlertTriangle
                                    :size='32'
                                    color='red'
                                    stroke='1'
                                />
                            </div>
                            <div>
                                Interview slots are only available to those who have submitted an application and spoken with our Prospective Member Coordinator.

                                To apply to join the team, and be given an interview slot, please visit the <a href='/apply'>Application Page</a>
                            </div>
                        </div>
                        <div class='card'>
                            <div class='card-header'>
                                <h3 class='card-title'>2026 Prospective Member Training Schedule 2025-2026</h3>
                            </div>
                            <div class='card-body'>
                                Thank you for your interest in joining Mesa County Search &amp; Rescue (MCSAR).
                                The following document outlines the process for becoming a member of MCSAR.
                                <br /><br />
                                A roster of current leadership can be found on the <a href='/team'>Team</a> page.
                            </div>
                        </div>
                        <div class='card'>
                            <div class='card-header'>
                                <h3 class='card-title'>Interview Slots</h3>
                            </div>
                            <div class='card-body'>
                                <p>
                                    Please sign up for an interview slot using the link below. Interviews will be held at
                                    the <a href='https://maps.app.goo.gl/NCf72in9pKp27j468'>Mesa County Sheriff's Office building</a>
                                </p>
                                <div class='alert alert-info d-flex'>
                                    <div>
                                        <IconInfoSquareRounded
                                            :size='32'
                                            color='blue'
                                            stroke='1'
                                        />
                                    </div>
                                    <div>
                                        The Google Map link provided above is directly on the door you will enter for your interview. Do not attempt to enter through the main entrance of the Sheriff's Office
                                        or the Jail. If you have trouble finding the interview location, please call or text the Prospective Member Coordinator at <a href='tel:2023906116'>(202) 390-6116</a>.
                                    </div>
                                </div>
                                <p>
                                    On the day of your interview, please arrive 10 minutes early and bring a valid Colorado State ID or Driver's License. Your license will be submitted to the Sheriff's Office
                                    for a background check done by the Colorado Bureau of Investigation (CBI).
                                </p>
                                <p>
                                    The interview will last approximately 30 minutes and will be conducted by a panel of MCSAR members.
                                    You will be asked about your interest in search and rescue, your availability, and any relevant experience you may have.
                                </p>
                                <p>
                                    MCSAR will review all applications the week following interviews and notify applicants of their status by mid November at the latest.
                                    Please note that our PM course is limited to 20 new members, and not all applicants will be accepted.
                                </p>

                                <div class='col-12 d-flex'>
                                    <div class='ms-auto'>
                                        <button
                                            class='btn btn-primary'
                                            :disabled='new Date() > new Date("2025-11-02")'
                                        >Sign Up for Interview</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='alert d-flex'>
                            <div>
                                <IconCalendar
                                    :size='32'
                                    color='blue'
                                    stroke='1'
                                />
                            </div>
                            <div>
                                <div class='card-title'>
                                    December 1st, 2025 - PM Course Fee Due
                                </div>
                                <div class='card-body'>
                                    <div class='row'>
                                        <div class='col-lg-10 col-md-8 col-sm-12'>
                                            <p>
                                                The 2025-2026 PM Course fee is $150. This fee will cover the cost of certification, training materials, and expendables used during training.
                                            </p>
                                            <p>
                                                Please note that this fee is non-refundable, except in the extremely unlikely case that MCSAR is unable to offer the PM course.
                                            </p>
                                            <p>
                                                Payment can be made by Venmo to @Mesa-SAR (see the QR code to the right) or via the <a href='https://www.paypal.com/donate/?hosted_button_id=9ZE83Z9KZSW5J'>Donate</a> page.
                                            </p>
                                        </div>
                                        <div class='col-lg-2 col-md-4 col-sm-12 d-flex justify-content-center align-items-center'>
                                            <img
                                                src='/venmo.jpg'
                                                alt='Venmo QR Code'
                                                style='height: 200px;'
                                                class='rounded'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='card'>
                            <div class='card-header'>
                                <h3 class='card-title'>PM Course Timeline</h3>
                            </div>
                            <div class='card-body'>
                                <p>
                                    The PM Course is the foundational training program for applicants wishing to join MCSAR.
                                </p>
                                <p>
                                    PM Course Dates are <span class='strong text-red'>MANDATORY</span> and attendance is required to successfully complete the course and be considered for membership.
                                    Please review the schedule before attending your interview to ensure you will be able to attend all sessions if offered a seat on the team.
                                </p>
                                <div class='table-responsive'>
                                    <table class='table table-hover card-table table-vcenter border rounded'>
                                        <thead>
                                            <tr>
                                                <th>Date &amp; Time</th>
                                                <th>Location</th>
                                                <th>Topic</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div>Tuesday, February 24th, 2026</div>
                                                    <span class='subheader'>
                                                        <IconClock :size='14' stroke='1'/>
                                                        1800 - 2100
                                                    </span>
                                                </td>
                                                <td>
                                                    <a href='https://maps.app.goo.gl/UY96dX6jL7VTWCP79'>Mesa County Sheriff's Office - Main Conference Room</a>
                                                </td>
                                                <td>
                                                    <div class='strong'>Introduction + Expectations + Gear Review + SO Tour</div>
                                                    An introduction to the team, the PM course, and expectations for members. Additionally, a review of required personal gear and a tour of the Sheriff's Office.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div>Thursday, February 26th, 2026</div>
                                                    <span class='subheader'>
                                                        <IconClock :size='14' stroke='1'/>
                                                        1800 - 2100
                                                    </span>
                                                </td>
                                                <td>
                                                    <a href='https://maps.app.goo.gl/UY96dX6jL7VTWCP79'>Mesa County Sheriff's Office - Main Conference Room</a>
                                                </td>
                                                <td>
                                                    <div class='strong'>Navigation With COTAK</div>
                                                    Students will learn the basics of utilizing <a href='https://cotak.gov/'>COTAK</a> for navigation, including map reading, Colorado's
                                                    first responder situational awareness tool.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div>Saturday, February 28th, 2026</div>
                                                    <span class='subheader'>
                                                        <IconClock :size='14' stroke='1'/>
                                                        0800 - Afternoon
                                                    </span>
                                                </td>
                                                <td>
                                                    <a href='https://maps.app.goo.gl/7T45ah24hnVi37X97'>Lunch Loops Trailhead</a>
                                                </td>
                                                <td>
                                                    <div class='strong'>Search Theory amp; Fitness Hike</div>
                                                    Students will learn the basics of performing a search operation, including a high level overview of search theory, and a
                                                    detailed overview of MCSAR expectations when responding to a callout. The day will conclude with the MCSAR annual fitness hike.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div>Thursday, March 5th, 2026</div>
                                                    <span class='subheader'>
                                                        <IconClock :size='14' stroke='1'/>
                                                        1800 - 2100
                                                    </span>
                                                </td>
                                                <td>
                                                    <a href='https://maps.app.goo.gl/wPm9riUFucWdXepo7'>Geer Building</a>
                                                </td>
                                                <td>
                                                    <div class='strong'>Primary Assessment Rodeo</div>
                                                    Students will spend the evening practicing patient on a variety of patients and scenarios, focusing on
                                                    building confidence and proficiency in primary assessment skills.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div>Saturday, March 7th, 2026</div>
                                                    <span class='subheader'>
                                                        <IconClock :size='14' stroke='1'/>
                                                        0800 - 1700
                                                    </span>
                                                </td>
                                                <td>
                                                    <a href='https://maps.app.goo.gl/VxYkHj1SxWYGXVA9A'>Opal Hill/Devil's Canyon Trailhead</a>
                                                </td>
                                                <td>
                                                    <div class='strong'>Patient Packaging &amp; Litter Skills</div>
                                                    Students will learn how to properly package a patient in a litter for transport, including litter selection, patient packaging techniques, and litter movement in the field.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div>Thursday, March 12th, 2026</div>
                                                    <span class='subheader'>
                                                        <IconClock :size='14' stroke='1'/>
                                                        1800 - 2100
                                                    </span>
                                                </td>
                                                <td>
                                                    <a href='https://maps.app.goo.gl/wPm9riUFucWdXepo7'>Geer Building</a>
                                                </td>
                                                <td>
                                                    <div class='strong'>Basic System Intro + Anchors + Litter Bridles</div>
                                                    Students will be introduced to to fundemental technical rescue concepts, starting with basic forces and load factors and graduating
                                                    to practicing applications in a hands-on environment.
                                                </td>
                                            </tr>
                                            <tr class='bg-blue-lt'>
                                                <td>
                                                    <div>Saturday, March 14th, 2026</div>
                                                    <span class='subheader'>Sunday, March 22nd, 2026</span>
                                                </td>
                                                <td>
                                                    Skiing or hopefully somewhere warm :)
                                                </td>
                                                <td>No Training for D51 Spring Break</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div>Thursday, March 26th, 2026</div>
                                                    <span class='subheader'>
                                                        <IconClock :size='14' stroke='1'/>
                                                        1800 - 2100
                                                    </span>
                                                </td>
                                                <td>
                                                    <a href='https://maps.app.goo.gl/Ypc6qtt8znjXkxTk6'>Pepsi Building</a>
                                                </td>
                                                <td>
                                                    <div class='strong'>Personal Rope Skills</div>
                                                    Students will learn essential rope skills for personal safety and movement in a vertical environment, focusing on
                                                    ascending, descending, &amp changeovers.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div>Saturday, March 28th, 2026</div>
                                                    <span class='subheader'>
                                                        <IconClock :size='14' stroke='1'/>
                                                        0800 - 1700
                                                    </span>
                                                </td>
                                                <td>
                                                    <a href='https://maps.app.goo.gl/g9iWQiRfQPcmAvL77'>Bangs Canyon</a>
                                                </td>
                                                <td>
                                                    <div class='strong'>Low Angle Field Day + System Safety</div>
                                                    Students will practice low angle team based rescue in a field environment, learning how to identify low vs high angle terrain and to recognize hazards in the field.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div>Thursday, April 2nd, 2026</div>
                                                    <span class='subheader'>
                                                        <IconClock :size='14' stroke='1'/>
                                                        17:30 - 0000
                                                    </span>
                                                </td>
                                                <td>
                                                    🤫
                                                </td>
                                                <td>
                                                    <div class='strong'>Mini Mission</div>
                                                    The "mini mission" will be the first time PM's are put to the test in a realistic search and rescue scenario, covering all skills introduced up to this point.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div>Saturday, April 4th, 2026</div>
                                                    <span class='subheader'>
                                                        <IconClock :size='14' stroke='1'/>
                                                        0800 - 1700
                                                    </span>
                                                </td>
                                                <td>
                                                    <a href='https://maps.app.goo.gl/ZNPFogtMeJZP99g19'>Shareholder Canyon</a>
                                                </td>
                                                <td>
                                                    <div class='strong'>Vertical Field Day + Pack Check</div>
                                                    Students will practice low and high angle rescue skills in a field environment. Additionally, students will have their personal gear inspected to ensure they are carrying
                                                    the required equipment for field operations.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div>Thursday, April 9th, 2026</div>
                                                    <span class='subheader'>
                                                        <IconClock :size='14' stroke='1'/>
                                                        1800 - 2200
                                                    </span>
                                                </td>
                                                <td>
                                                    <a href='https://maps.app.goo.gl/Ypc6qtt8znjXkxTk6'>Pepsi Building</a>
                                                </td>
                                                <td>
                                                    <div class='strong'>PM Annuals Testing</div>
                                                    The PM course up until this point is designed to prepare you for the team's annual testing. You will be tested on your rope skills, patient packaging skills, and first aid knowledge.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div>Friday, April 10th, 2026</div>
                                                    <span class='subheader'>
                                                        <IconClock :size='14' stroke='1'/>
                                                        1800 - 0800 Saturday
                                                    </span>
                                                </td>
                                                <td>
                                                    🤫
                                                </td>
                                                <td>
                                                    <div class='strong'>Overnighter</div>
                                                    The "overnighter" is a mock mission designed to simulate a real search and rescue operation, testing all the skills and knowledge acquired during the PM course.
                                                </td>
                                            </tr>
                                            <tr class='bg-red-lt'>
                                                <td>
                                                    <div>Saturday, March 14th, 2026</div>
                                                    <span class='subheader'>
                                                        <IconClock :size='14' stroke='1'/>
                                                        0800 - 1000
                                                    </span>
                                                </td>
                                                <td>Overnighter Morning Location</td>
                                                <td>
                                                    <div class='strong'>Overnighter Evaluation</div>
                                                    The team will evaluate PM performance and call PM's that evening to notify if they will be offered a seat on the team.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div>Thursday, April 16th, 2026</div>
                                                    <span class='subheader'>
                                                        <IconClock :size='14' stroke='1'/>
                                                        1800 - 2000
                                                    </span>
                                                </td>
                                                <td>
                                                    <a href='https://maps.app.goo.gl/UY96dX6jL7VTWCP79'>Main SO</a>
                                                </td>
                                                <td>
                                                    <div class='strong'>Post PM Logistics &amp; Potluck</div>
                                                    Finalize administrative tasks and celebrate the completion of the 2026 PM course
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <PageFooter />
    </div>
</template>

<script setup>
import Call911 from './util/Call911.vue';
import Leader from './util/Leader.vue';
import PageHeader from './util/Header.vue';
import PageFooter from './util/PageFooter.vue';
import {
    IconClock,
    IconCalendar,
    IconAlertTriangle,
    IconInfoSquareRounded
} from '@tabler/icons-vue';
</script>

