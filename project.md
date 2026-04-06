# 🏆 SG Sports — Sports Club Management System
### Next.js 14 · Full-Stack · Athletic Excellence Platform

---

## 📌 Project Overview

**SG Sports** is a premium, full-stack sports club management platform built on Next.js 14. It serves as the official digital home for the **SG Sports Club** — a multi-sport club housing athletes across cricket, football, badminton, basketball, kabaddi, athletics, and more. The platform showcases player profiles, team rosters, achievements, match schedules, event results, and club news — all managed through a powerful admin panel backed by Supabase.

The experience is designed to feel like an **elite sports arena** — energetic, bold, fast-paced, and deeply immersive. Every scroll, hover, and click should feel like the electricity of a live match.

---

## 🎯 Target Audience

| Persona | Description |
|---|---|
| **Visitors / Fans** | People browsing club info, player profiles, match results |
| **Club Members / Athletes** | Players viewing their own profiles and team pages |
| **Club Admin / Manager** | Staff managing players, teams, events, achievements |
| **Scouts / Recruiters** | External people evaluating players' profiles and stats |
| **Parents / Guardians** | Families tracking their child's club participation |

---

## 🧱 Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS + custom CSS variables |
| **Animations** | Framer Motion + CSS keyframes |
| **Database** | Supabase (PostgreSQL) |
| **Auth** | Supabase Auth (Email + Google OAuth) |
| **File Storage** | Supabase Storage (player photos, certificates, trophies) |
| **State Management** | Zustand |
| **Forms** | React Hook Form + Zod validation |
| **Charts & Stats** | Recharts |
| **Icons** | Lucide React |
| **Deployment** | Vercel |
| **Rich Text** | TipTap Editor (for news/announcements) |

---

## 🎨 Design System & Aesthetic

### Theme
**"Stadium Energy"** — A high-voltage, dark-athletic aesthetic. Think the tunnel before a big match — deep blacks, electric lime green, neon blue accents, motion blurs, and diagonal slash compositions. This is not a corporate website; it is a live scoreboard that breathes.

### Color Palette

```css
:root {
  /* Backgrounds */
  --bg-primary:       #080c10;   /* Deep stadium black */
  --bg-secondary:     #0d1117;   /* Card surface */
  --bg-elevated:      #161b22;   /* Raised panels */
  --bg-glass:         rgba(255,255,255,0.04); /* Glass cards */

  /* Accents */
  --accent-lime:      #b5ff2d;   /* Primary energy accent (electric lime) */
  --accent-blue:      #38bdf8;   /* Secondary highlight (sky blue) */
  --accent-orange:    #ff6b2b;   /* Achievement / alert color */
  --accent-gold:      #fbbf24;   /* Trophy / medal color */

  /* Text */
  --text-primary:     #f0f4f8;
  --text-secondary:   #64748b;
  --text-muted:       #334155;

  /* Borders & Glow */
  --border:           #1e2d3d;
  --glow-lime:        rgba(181, 255, 45, 0.18);
  --glow-blue:        rgba(56, 189, 248, 0.15);
  --glow-orange:      rgba(255, 107, 43, 0.2);
}
```

### Typography

```
Display Font:   "Barlow Condensed" — Bold, athletic, championship-style headlines
Heading Font:   "Rajdhani"         — Techy, angular, score board energy
Body Font:      "Nunito Sans"      — Clean, readable player bios and descriptions
Stat Font:      "Orbitron"         — Numbers, scores, jersey numbers, stats
```

### Design Language

- **Diagonal slash dividers** between sections (clip-path skewed separators)
- **Jersey number typography** — giant background numerals as decorative element
- **Sport-specific accent colors** per sport page (cricket=green, football=blue, kabaddi=orange)
- **Scanline texture** overlay — subtle CRT screen effect for stadium scoreboard feel
- **Neon glow borders** on active/featured cards
- **Motion blur trails** on hero athlete images
- **Grid-breaking layouts** — player photos that bleed out of their cards
- **Glassmorphism panels** over blurred athlete backgrounds

---

## 🗂️ Project File Structure

```
sg-sports/
├── app/
│   ├── (public)/
│   │   ├── page.tsx                      # Homepage
│   │   ├── about/
│   │   │   └── page.tsx                  # About SG Sports Club
│   │   ├── players/
│   │   │   ├── page.tsx                  # All players directory
│   │   │   └── [slug]/
│   │   │       └── page.tsx              # Individual player profile
│   │   ├── teams/
│   │   │   ├── page.tsx                  # All teams
│   │   │   └── [sport]/
│   │   │       └── page.tsx              # Sport-specific team page
│   │   ├── achievements/
│   │   │   └── page.tsx                  # Trophy room / honours board
│   │   ├── events/
│   │   │   ├── page.tsx                  # Events & match calendar
│   │   │   └── [id]/
│   │   │       └── page.tsx              # Event detail / result page
│   │   ├── news/
│   │   │   ├── page.tsx                  # Club news & announcements
│   │   │   └── [slug]/
│   │   │       └── page.tsx              # News article
│   │   ├── gallery/
│   │   │   └── page.tsx                  # Photo & video gallery
│   │   └── contact/
│   │       └── page.tsx                  # Contact & membership enquiry
│   ├── (auth)/
│   │   ├── login/page.tsx
│   │   └── register/page.tsx
│   ├── (member)/
│   │   ├── dashboard/page.tsx            # Member dashboard
│   │   ├── profile/page.tsx              # Edit own profile
│   │   └── my-achievements/page.tsx
│   ├── (admin)/
│   │   └── admin/
│   │       ├── page.tsx                  # Admin dashboard
│   │       ├── players/page.tsx          # Manage players
│   │       ├── players/add/page.tsx
│   │       ├── players/[id]/edit/page.tsx
│   │       ├── teams/page.tsx
│   │       ├── events/page.tsx
│   │       ├── achievements/page.tsx
│   │       ├── news/page.tsx
│   │       ├── gallery/page.tsx
│   │       └── members/page.tsx
│   ├── api/
│   │   ├── players/route.ts
│   │   ├── teams/route.ts
│   │   ├── events/route.ts
│   │   ├── achievements/route.ts
│   │   ├── news/route.ts
│   │   ├── gallery/route.ts
│   │   └── contact/route.ts
│   └── layout.tsx
│
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Badge.tsx
│   │   ├── SportBadge.tsx             # Sport-colored pill badge
│   │   ├── StatCard.tsx               # Animated stat number card
│   │   ├── Skeleton.tsx
│   │   ├── Modal.tsx
│   │   ├── Tooltip.tsx
│   │   └── ProgressBar.tsx            # Animated skill bar
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── MobileMenu.tsx
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── ClubStatsBar.tsx
│   │   ├── FeaturedPlayers.tsx
│   │   ├── SportsWePlay.tsx
│   │   ├── RecentAchievements.tsx
│   │   ├── UpcomingEvents.tsx
│   │   ├── LatestNews.tsx
│   │   └── GalleryPreview.tsx
│   ├── players/
│   │   ├── PlayerCard.tsx
│   │   ├── PlayerGrid.tsx
│   │   ├── PlayerFilters.tsx
│   │   ├── PlayerHero.tsx             # Full-page hero for player profile
│   │   ├── AchievementTimeline.tsx
│   │   ├── StatsRadarChart.tsx        # Recharts radar for skills
│   │   ├── SkillBars.tsx
│   │   └── PlayerBadges.tsx
│   ├── teams/
│   │   ├── TeamCard.tsx
│   │   ├── TeamRoster.tsx
│   │   ├── TeamStats.tsx
│   │   └── SportHero.tsx
│   ├── achievements/
│   │   ├── TrophyCard.tsx
│   │   ├── MedalWall.tsx
│   │   └── AchievementFilter.tsx
│   ├── events/
│   │   ├── EventCard.tsx
│   │   ├── EventCalendar.tsx
│   │   └── MatchResult.tsx
│   ├── news/
│   │   ├── NewsCard.tsx
│   │   └── ArticleBody.tsx
│   ├── gallery/
│   │   ├── GalleryGrid.tsx
│   │   └── LightboxViewer.tsx
│   └── admin/
│       ├── AdminStatsRow.tsx
│       ├── PlayerTable.tsx
│       ├── PlayerForm.tsx
│       ├── AchievementForm.tsx
│       ├── EventForm.tsx
│       └── ImageUploader.tsx
│
├── lib/
│   ├── supabase/
│   │   ├── client.ts
│   │   ├── server.ts
│   │   └── middleware.ts
│   └── utils/
│       ├── sportColors.ts             # Returns color per sport
│       ├── formatDate.ts
│       └── slugify.ts
│
├── store/
│   └── useFilterStore.ts
│
├── types/
│   ├── player.ts
│   ├── team.ts
│   ├── achievement.ts
│   ├── event.ts
│   └── user.ts
│
└── public/
    ├── fonts/
    ├── images/
    │   ├── club-logo.png
    │   ├── sports/                    # Sport icons/illustrations
    │   └── hero/
    └── icons/
```

---

## 🗄️ Database Schema (Supabase / PostgreSQL)

### `sports`
```sql
id            uuid PRIMARY KEY DEFAULT gen_random_uuid()
name          text NOT NULL UNIQUE         -- "Cricket", "Football", "Badminton"
slug          text NOT NULL UNIQUE         -- "cricket", "football"
icon_url      text                         -- SVG/PNG sport icon
accent_color  text                         -- "#16a34a" hex for this sport's theme
banner_url    text                         -- Team banner image
description   text
is_active     boolean DEFAULT true
created_at    timestamp DEFAULT now()
```

### `players`
```sql
id              uuid PRIMARY KEY DEFAULT gen_random_uuid()
user_id         uuid REFERENCES auth.users(id) NULLABLE  -- linked if they register
slug            text UNIQUE NOT NULL
full_name       text NOT NULL
date_of_birth   date
gender          text                        -- "male", "female", "other"
jersey_number   integer
profile_photo   text                        -- Supabase Storage URL
banner_photo    text                        -- Background image for profile page
bio             text
hometown        text
state           text
email           text
phone           text
position        text                        -- "Batsman", "Goalkeeper", "Shuttler"
sport_id        uuid REFERENCES sports(id)
team_id         uuid REFERENCES teams(id) NULLABLE
membership_date date
membership_status text DEFAULT 'active'    -- active, inactive, alumni
is_captain      boolean DEFAULT false
is_featured     boolean DEFAULT false       -- Show in homepage spotlight
years_in_club   integer GENERATED ALWAYS AS
                  (EXTRACT(YEAR FROM now()) - EXTRACT(YEAR FROM membership_date)) STORED
created_at      timestamp DEFAULT now()
updated_at      timestamp DEFAULT now()
```

### `player_stats`
```sql
id              uuid PRIMARY KEY DEFAULT gen_random_uuid()
player_id       uuid REFERENCES players(id) ON DELETE CASCADE
stat_key        text NOT NULL               -- "Matches Played", "Goals Scored"
stat_value      text NOT NULL               -- "142", "67"
stat_unit       text                        -- "matches", "goals", "points"
season          text                        -- "2023-24", "All Time"
updated_at      timestamp DEFAULT now()
```

### `player_skills`
```sql
id          uuid PRIMARY KEY DEFAULT gen_random_uuid()
player_id   uuid REFERENCES players(id) ON DELETE CASCADE
skill_name  text NOT NULL               -- "Speed", "Accuracy", "Stamina"
score       integer CHECK (score BETWEEN 0 AND 100)
```

### `teams`
```sql
id              uuid PRIMARY KEY DEFAULT gen_random_uuid()
name            text NOT NULL               -- "SG Cricket XI", "SG Football FC"
slug            text UNIQUE NOT NULL
sport_id        uuid REFERENCES sports(id)
captain_id      uuid REFERENCES players(id) NULLABLE
coach_name      text
founded_year    integer
team_photo      text                        -- Group team photo URL
description     text
wins            integer DEFAULT 0
losses          integer DEFAULT 0
draws           integer DEFAULT 0
tournaments_won integer DEFAULT 0
is_active       boolean DEFAULT true
created_at      timestamp DEFAULT now()
```

### `achievements`
```sql
id              uuid PRIMARY KEY DEFAULT gen_random_uuid()
title           text NOT NULL               -- "State Cricket Championship 2024"
description     text
achievement_type text NOT NULL              -- "trophy", "medal", "certificate", "ranking"
medal_type      text                        -- "gold", "silver", "bronze" NULLABLE
level           text                        -- "district", "state", "national", "international"
sport_id        uuid REFERENCES sports(id) NULLABLE
team_id         uuid REFERENCES teams(id) NULLABLE
date_achieved   date
image_url       text                        -- Trophy / certificate photo
created_at      timestamp DEFAULT now()
```

### `player_achievements`
```sql
id              uuid PRIMARY KEY DEFAULT gen_random_uuid()
player_id       uuid REFERENCES players(id) ON DELETE CASCADE
achievement_id  uuid REFERENCES achievements(id)
role            text                        -- "Winner", "Runner-up", "MVP"
```

### `events`
```sql
id              uuid PRIMARY KEY DEFAULT gen_random_uuid()
title           text NOT NULL
slug            text UNIQUE NOT NULL
sport_id        uuid REFERENCES sports(id) NULLABLE
team_id         uuid REFERENCES teams(id) NULLABLE
event_type      text                        -- "match", "tournament", "training_camp", "trial"
status          text DEFAULT 'upcoming'     -- upcoming, ongoing, completed, cancelled
start_date      date NOT NULL
end_date        date
venue           text
city            text
description     text
result          text                        -- "Won 3-1 vs City FC"
result_detail   text                        -- Detailed match report
banner_url      text
is_featured     boolean DEFAULT false
created_at      timestamp DEFAULT now()
```

### `news`
```sql
id              uuid PRIMARY KEY DEFAULT gen_random_uuid()
title           text NOT NULL
slug            text UNIQUE NOT NULL
excerpt         text
body            text                        -- Rich text HTML from TipTap
cover_image     text
author_name     text DEFAULT 'SG Sports'
sport_id        uuid REFERENCES sports(id) NULLABLE
tags            text[]
is_published    boolean DEFAULT false
published_at    timestamp
created_at      timestamp DEFAULT now()
```

### `gallery`
```sql
id          uuid PRIMARY KEY DEFAULT gen_random_uuid()
title       text
image_url   text NOT NULL
media_type  text DEFAULT 'image'            -- "image", "video"
sport_id    uuid REFERENCES sports(id) NULLABLE
event_id    uuid REFERENCES events(id) NULLABLE
player_id   uuid REFERENCES players(id) NULLABLE
tags        text[]
is_featured boolean DEFAULT false
uploaded_at timestamp DEFAULT now()
```

### `memberships`
```sql
id              uuid PRIMARY KEY DEFAULT gen_random_uuid()
player_id       uuid REFERENCES players(id)
plan_name       text                        -- "Annual", "Lifetime"
start_date      date
end_date        date NULLABLE
fee_paid        integer                     -- Amount in INR
status          text DEFAULT 'active'       -- active, expired, pending
created_at      timestamp DEFAULT now()
```

### `contact_enquiries`
```sql
id          uuid PRIMARY KEY DEFAULT gen_random_uuid()
name        text NOT NULL
email       text NOT NULL
phone       text
subject     text
message     text NOT NULL
type        text DEFAULT 'general'          -- "general", "membership", "sponsorship", "media"
status      text DEFAULT 'new'             -- new, seen, replied
created_at  timestamp DEFAULT now()
```

---

## 📄 Pages — Detailed Breakdown

---

### 1. 🏠 Homepage (`/`)

**Purpose:** Electrifying first impression of SG Sports Club.

#### Sections:

**A. Hero Section**
- Full-viewport dark background with a dramatic collage of athlete action shots
- Diagonal slash composition: left side = dark background with text, right side = athlete image bleeding off-screen
- Giant display text: `"SG SPORTS CLUB"` in Barlow Condensed, massive
- Animated subtitle: `"One Club. Many Champions."`
- CTA buttons: `Meet Our Players` (lime) | `Explore Sports` (outlined)
- Animated jersey number `"01"` as giant background watermark
- Looping sport icon ticker scrolls horizontally like a broadcast ticker

**B. Club Stats Bar**
- Horizontal strip, dark glass panel
- Count-up animated numbers on scroll enter:
  - `320+ Athletes` | `12 Sports` | `8 National Champions` | `Founded 2005`
- Dividers between stats as diagonal slashes

**C. Sports We Play**
- Section title: `"OUR ARENA"` — styled with slash underline
- Grid of sport cards (2×3 or 3×2 on desktop)
- Each card: sport illustration, sport name, player count, team name
- Each sport has its own accent color — card border glows in that color
- Hover: card flips or tilts (perspective transform) to reveal team record
- Click → goes to sport team page

**D. Featured Players**
- Section: `"SPOTLIGHT ATHLETES"`
- Horizontal scroll carousel of 4–5 featured player cards
- Card: large player photo (grayscale → color on hover), name in Barlow Condensed, sport badge, position, one key stat (e.g. "142 Matches Played")
- Hover: card lifts with lime glow, name underlines diagonally, "View Profile" slides in

**E. Recent Achievements**
- `"HONOURS BOARD"` section title
- Trophy/medal cards in a masonry layout
- Each card: medal type badge (Gold/Silver/Bronze in their colors), tournament name, sport, level (State / National), date
- Gold trophies have shimmer animation
- "View All Achievements" CTA

**F. Upcoming Events**
- `"WHAT'S NEXT"` section
- 3 upcoming event cards in a dark glass style
- Each card: sport color left border, event type badge, title, date, venue, team
- Countdown timer for the nearest event
- "Full Schedule" button

**G. Latest News**
- `"FROM THE DUGOUT"` — 3 news cards
- Cover image (grayscale + colored overlay), tag, title, excerpt, date
- Hover: overlay fades, image shows in full color

**H. Gallery Preview**
- Masonry 6-image grid preview
- Hover: image reveals caption
- "View Full Gallery" CTA

**I. Footer**
- Dark footer with SG Sports logo (large)
- Columns: Quick Links | Sports | Contact Info | Social Media
- Tagline: `"SG Sports — Where Champions Train"`
- Social icons with glow hover effects

---

### 2. 👥 Players Directory (`/players`)

**Purpose:** Browse all club members.

#### Filter & Sort Bar
- **Sport:** Pill chips (All, Cricket, Football, Badminton…) — active chip glows in sport color
- **Status:** Active | Alumni | Inactive
- **Gender:** All | Male | Female
- **Position:** Dynamic based on sport selected
- **Sort:** Name A–Z | Newest Member | Jersey Number | Achievements Count
- **Search:** Live search by player name with debounce

#### Player Grid
- 4-column desktop, 2-column tablet, 1-column mobile
- Each **PlayerCard**:
  - Player photo (grayscale with sport-color tint → full color on hover)
  - Jersey number watermark bottom-right
  - Sport badge top-left (color-coded)
  - Full name in Rajdhani bold
  - Position text
  - Captain badge if applicable
  - Years in club pill
  - Hover: card lifts, name glows, "View Profile" button slides in from bottom
- Infinite scroll with skeleton loading

#### Active Filter Chips row
- Chips for applied filters with × to remove

---

### 3. 🏅 Player Profile Page (`/players/[slug]`)

**This is the most impressive page — each player gets their own spotlight.**

#### A. Player Hero
- Full-viewport height section
- Blurred player `banner_photo` as background
- Dark gradient overlay (bottom fade)
- Player photo: large cutout/portrait, no card — free-standing
- Jersey number in giant Orbitron font as background watermark
- Player name in massive Barlow Condensed
- Sport badge + Position pill
- Captain crown icon if captain
- Membership years: "SG Sports Member since 2018"
- Quick stats row: Matches | Achievements | Sport
- Action buttons: `Follow` (animated heart) | `Share Profile`

#### B. About Section
- Two-column: bio text (left) + info grid (right)
- Info grid items: DOB, Hometown, State, Position, Sport, Team
- Entrance: slide-in from both sides on scroll

#### C. Stats Section
- `"CAREER STATISTICS"`
- Stat cards row: each stat with a large Orbitron number + label
- Animated count-up on viewport enter
- Filter by season dropdown

#### D. Skills Radar Chart
- `"SKILL PROFILE"` section
- Recharts RadarChart showing 5–6 skills (Speed, Strength, Accuracy, Stamina, Teamwork, Technique)
- Dark background chart with lime/sport-color fill
- Skill bars below: animated horizontal bars fill on scroll

#### E. Achievements Timeline
- `"MY JOURNEY"` — vertical timeline
- Each achievement: date (left), connector line, achievement card (right)
- Card: medal badge, tournament name, level badge, brief description
- Gold achievements have shimmer effect
- Alternates left-right on desktop

#### F. Gallery
- Player's photos from the gallery table
- 3-column masonry grid
- Click → opens lightbox

#### G. Related Players
- "Same Team" or "Same Sport" — horizontal scroll of 4 player cards

---

### 4. 🏟️ Teams Page (`/teams`)

- Intro: `"OUR SQUADS"` section title
- Grid of team cards — one per sport
- Each card: sport banner image as background, team name, sport icon, player count, record (W/L/D), captain name
- Sport accent color as card glow border
- Hover: scale up + glow intensifies
- Click → goes to sport team page

---

### 5. ⚽ Sport Team Page (`/teams/[sport]`)

**Example: `/teams/cricket`**

**A. Sport Hero**
- Full-width sport banner
- Sport name in giant Barlow Condensed
- Team name + accent color glow
- Record stats: Wins | Losses | Draws | Tournaments Won

**B. Team Roster**
- Grid of all players in that sport
- Player card variant: captain highlighted with crown + gold border
- Filter by position

**C. Team Stats**
- `"TEAM RECORD"` section
- Bar/line chart of performance over seasons (Recharts)
- Win rate percentage donut

**D. Achievements**
- All trophies/medals won by this team/sport
- Trophy wall grid

**E. Upcoming Matches**
- Next matches for this sport

---

### 6. 🏆 Achievements / Trophy Room (`/achievements`)

**Purpose:** The honours board of the entire club.

**A. Hero Stats Bar**
- Gold medals count | Silver | Bronze | State titles | National titles

**B. Filter Bar**
- By Sport | By Level (District/State/National/International) | By Year | By Medal Type

**C. Trophy Display Grid**
- Masonry grid of achievement cards
- Gold achievements: shimmer gold border, larger card
- Silver: silver glow
- Bronze: bronze glow
- Each card: trophy photo, title, sport badge, level badge, date, team/players who won

**D. Level Breakdown**
- Tabs: International | National | State | District
- Each tab shows relevant achievements

**E. Leaderboard**
- "Most Decorated Players" — list of top 10 players by achievement count
- Player photo, name, sport, achievement count

---

### 7. 📅 Events Page (`/events`)

**A. Status Tabs**
- Upcoming | Ongoing | Completed

**B. Calendar View Toggle**
- Toggle between List View and Calendar View
- Calendar: month grid, events shown as sport-colored dots on dates
- Click date → shows event popup

**C. Event Cards**
- Sport accent color left-border
- Event type badge: Match / Tournament / Camp / Trial
- Title, date range, venue, city
- Team involved
- For completed events: result badge (Won / Lost / Draw)

**D. Upcoming Event — Featured Banner**
- Large banner for the next major event
- Countdown timer: `"DD HH MM SS"` in Orbitron font
- Register / RSVP button

---

### 8. 📰 News Page (`/news`)

**A. Featured Article**
- Large hero card (top of page) with full-width cover image
- Overlay with article title, excerpt, sport tag, date
- "Read More" CTA

**B. News Grid**
- 3-column grid of news cards
- Filter by sport tag
- Cards: cover image with sport-colored overlay, tag, title, excerpt, date

**C. News Article Page (`/news/[slug]`)**
- Full-width cover image
- Article meta: sport badge, date, author
- Rich text body (from TipTap — supports headings, images, bold, quotes)
- Side panel: related articles, upcoming events
- Share buttons: WhatsApp, Twitter, Copy link

---

### 9. 🖼️ Gallery Page (`/gallery`)

**A. Filter Bar**
- All | By Sport | By Event | By Player

**B. Masonry Gallery Grid**
- Dynamic image grid with varying sizes
- Each image: hover reveals sport tag + caption
- Grayscale → color on hover with transition

**C. Lightbox Viewer**
- Click image → fullscreen lightbox modal
- Navigation arrows (prev/next)
- Swipe gestures on mobile
- Image title, sport badge, event name below
- Download button

---

### 10. 📞 Contact Page (`/contact`)

**A. Club Info**
- Address, phone, email, social links
- Embedded Google Map (club location)

**B. Enquiry Form**
- Fields: Name, Email, Phone, Type (General / Membership / Sponsorship / Media), Message
- Animated input labels (float on focus)
- Submit with loading spinner
- Success state: animated checkmark + confirmation message

**C. Membership CTA**
- "Want to join SG Sports?" banner
- Explains membership process: Apply → Trial → Selection → Welcome
- "Apply for Membership" button → opens a detailed application form modal

---

### 11. 🙋 About Page (`/about`)

**A. Club Story**
- Timeline of club history from founding year
- Key milestones: first trophy, first national player, expansion to new sports

**B. Mission & Vision**
- Two cards side by side: Mission (what we do) | Vision (where we're going)

**C. Coaching Staff**
- Grid of coaches: photo, name, sport coached, credentials

**D. Club Facilities**
- Cards for each facility: Ground, Gym, Indoor court, etc.

**E. Partners & Sponsors**
- Logo grid of club sponsors with grayscale → color hover

---

### 12. 👤 Member Dashboard (`/dashboard`)

*For logged-in players only.*

- Welcome header: "Welcome back, [Name]! Jersey #[number]"
- Profile completion progress bar
- Tiles:
  - My Profile → edit personal info
  - My Stats → view/request stat updates
  - My Achievements → personal achievement list
  - My Events → upcoming events for my sport/team
  - My Gallery → photos where I appear
- Notification bell: upcoming match alerts, news from my sport

---

### 13. 🛡️ Admin Panel (`/admin/*`)

*Accessible only to admin role users.*

#### Admin Dashboard (`/admin`)
- Stats row: Total Players | Active Members | Upcoming Events | News Published | New Enquiries
- Recent activity feed
- Quick actions: Add Player | Add Achievement | Add Event | Upload Gallery

#### Players Management (`/admin/players`)
- Searchable, filterable data table
- Actions per row: View | Edit | Delete | Toggle Featured
- Add Player → multi-step form:
  - Step 1: Personal Info (name, DOB, gender, hometown)
  - Step 2: Sport & Position (select sport, team, position, jersey number)
  - Step 3: Profile Photo & Banner upload via Supabase Storage
  - Step 4: Bio & Skills
  - Step 5: Preview & Submit

#### Achievements Management (`/admin/achievements`)
- Table of all achievements
- Add/Edit Achievement form:
  - Title, type, medal type, level, date, sport, team
  - Link players to achievement (multi-select)
  - Upload trophy/certificate image

#### Events Management (`/admin/events`)
- Table of events with status filter tabs
- Add/Edit Event form: title, sport, type, dates, venue, description
- Update result after event completion

#### News Management (`/admin/news`)
- Table with Published / Draft toggle per article
- TipTap rich text editor for article body
- Cover image upload
- Publish / Unpublish toggle

#### Gallery Management (`/admin/gallery`)
- Bulk image upload
- Tag images by sport, event, player
- Toggle featured images

#### Enquiries (`/admin/members`)
- Table of contact enquiries
- Mark as Seen / Replied
- Membership applications with Accept/Reject

---

## ✨ Animations & Micro-Interactions

### Page & Section Animations

| Component | Animation |
|---|---|
| Hero text | Clip-path wipe reveal, word by word |
| Stat numbers | Count-up on scroll viewport enter |
| Player cards | Stagger fade + lift from bottom |
| Sport cards | Perspective tilt on hover |
| Achievement cards | Shimmer sweep on gold cards |
| Skills radar | Draw-on animation (stroke-dashoffset) |
| Skill bars | Width expands from 0 on scroll enter |
| Achievement timeline | Line draws downward + cards fade in |
| News cards | Overlay fades on hover to reveal color |
| Gallery grid | Grayscale to color transition on hover |
| Countdown timer | Each digit flips like a split-flap display |
| Section titles | Diagonal underline draws left→right |

### Micro-Interactions

| Element | Interaction |
|---|---|
| Player card hover | Grayscale → color + lift + glow + button reveal |
| Sport chip select | Chip fills with sport accent color + slight bounce |
| Jersey number | Subtle glow pulse in the background |
| Captain badge | Crown icon has a slow glow animation |
| Gold trophy | Shimmer sweep repeats every 3 seconds |
| Follow button | Heart fill + scale bounce |
| Share button | Brief explosion of small dots |
| Filter chip remove | Chip shrinks and fades |
| Form input focus | Label floats up + lime underline draws in |
| CTA buttons | Diagonal shimmer sweep on hover |
| Gallery hover | Caption slides up from bottom |
| Lightbox open | Scale from clicked image position |
| Mobile menu | Links stagger in with sport icon beside each |
| Navbar on scroll | Blur backdrop appears + slim height transition |
| Toast notifications | Slide from top-right + sport-color left border |
| Page transitions | Crossfade between routes (Framer Motion AnimatePresence) |

### Scroll Animations
- Parallax on hero section background
- Section separators: diagonal slash reveals as you scroll past
- "Pinned" player portrait that stays fixed as right-side content scrolls (profile page)
- Ticker bar at top scrolls sports names continuously

---

## 📱 Responsiveness Strategy

| Breakpoint | Adjustments |
|---|---|
| Mobile < 640px | Single column, bottom sheet filters, vertical timeline, swipe gallery, stacked hero |
| Tablet 640–1024px | 2-column grid, collapsible filters, horizontal team stats |
| Desktop > 1024px | 4-column player grid, persistent sidebar, pinned player portrait |

- All touch targets ≥ 48px
- Swipe gestures on gallery and carousels
- Mobile bottom nav: Home | Players | Sports | Events | Admin (if role)
- Hamburger menu with slide-in dark overlay

---

## 🔒 Authentication & Authorization

| Feature | Access |
|---|---|
| Homepage, Players, Teams, Gallery | Public |
| Player Profile | Public |
| News, Events, Achievements | Public |
| Contact / Membership Enquiry | Public (guest) |
| Member Dashboard | Logged-in members only |
| Edit Own Profile | Logged-in, own profile only |
| Admin Panel | Admin role only |

- Supabase Auth with Google OAuth + Email/Password
- Row Level Security (RLS) on all tables
- Middleware protects `/dashboard` and `/admin` routes
- Role stored in `user_metadata` or separate `user_roles` table

---

## 📧 Notifications & Alerts

| Trigger | Notification |
|---|---|
| New member registered | Admin gets alert, member gets welcome email |
| Event result updated | Toast in dashboard for relevant team members |
| Achievement added for player | Player gets notified |
| Contact enquiry received | Admin gets notification |
| Upcoming event (1 day before) | Email reminder to team members |

---

## 🚀 Performance Strategy

- **Next.js Image** for all player photos and banners (WebP, lazy load, blur placeholder)
- **ISR** for player profiles and team pages (revalidate every 30 minutes)
- **Server Components** for all initial data fetching
- **Skeleton loaders** on all dynamic sections
- **Suspense boundaries** around heavy chart components
- **next/font** for all custom fonts (zero FOUT)
- Target: **90+ Lighthouse Performance**, 100 Accessibility

---

## 🗺️ Development Phases

### Phase 1 — Foundation (Week 1)
- [ ] Next.js 14 setup with TypeScript + Tailwind + Framer Motion
- [ ] Design system: CSS variables, fonts, global styles
- [ ] Supabase project + all table schemas + RLS policies
- [ ] Navbar + Footer
- [ ] Supabase seed data: 3 sports, 15 players, 5 achievements

### Phase 2 — Public Pages (Week 2–3)
- [ ] Homepage (all sections)
- [ ] Players directory + filters + search
- [ ] Player profile page (hero, stats, skills, achievements, timeline)
- [ ] Teams page + sport team page

### Phase 3 — Content Pages (Week 4)
- [ ] Achievements / Trophy room page
- [ ] Events page + calendar view
- [ ] News page + article page (TipTap rendering)
- [ ] Gallery + lightbox
- [ ] About + Contact pages

### Phase 4 — Auth & Member Features (Week 5)
- [ ] Supabase Auth integration
- [ ] Login / Register pages
- [ ] Member dashboard
- [ ] Edit own profile flow

### Phase 5 — Admin Panel (Week 6)
- [ ] Admin dashboard with stats
- [ ] Players CRUD (multi-step form + Supabase Storage upload)
- [ ] Achievements, Events, News CRUD
- [ ] Gallery bulk upload
- [ ] Enquiry management

### Phase 6 — Polish & Launch (Week 7)
- [ ] All animations + micro-interactions pass
- [ ] Full mobile responsiveness pass
- [ ] SEO meta tags (dynamic per player, sport, article)
- [ ] Performance optimization
- [ ] Deploy to Vercel
- [ ] Final QA

---

## 📦 Seed Data Plan

### Sports (12)
Cricket, Football, Badminton, Basketball, Kabaddi, Athletics (Track & Field), Table Tennis, Chess, Volleyball, Swimming, Boxing, Shooting

### Teams (12, one per sport)
- SG Cricket XI
- SG Football FC
- SG Badminton Squad
- SG Ballers (Basketball)
- SG Kabaddi Warriors
- SG Athletics Club
- (etc.)

### Players (seed 20 initial)
- Mix of male and female players
- Spread across sports
- 2-3 featured players
- 1 captain per team
- Varied achievements

### Achievements (seed 15)
- 3 national level (gold)
- 5 state level (gold + silver)
- 7 district level (various)

---

## 📏 Key Success Metrics

| Metric | Target |
|---|---|
| Homepage LCP | < 2.5s |
| Player profile LCP | < 2s |
| Lighthouse Performance | 90+ |
| Lighthouse Accessibility | 100 |
| Filter response time | < 300ms |
| Mobile usability | 95+ |
| Image load (blur → full) | < 1s |

---

## 🧩 Optional Future Features

- **Live Match Scoreboard** — real-time score updates via Supabase Realtime
- **Player Performance Analytics** — deeper stat charts season by season
- **Training Schedule** — weekly training calendar for each sport
- **Online Membership Fees** — Razorpay integration for paying membership
- **Certificate Generator** — Auto-generate achievement certificates as PDF
- **Coach Portal** — Separate coach login to update stats and write match reports
- **WhatsApp Notifications** — Notify members of events/results via WhatsApp Business API
- **Multi-language** — Marathi + Hindi support for regional accessibility
- **PWA** — Install as app, offline player browsing

---

*SG Sports Club — Where Champions Train*
*Built with Next.js 14 · Supabase · Tailwind CSS · Framer Motion · Recharts*
