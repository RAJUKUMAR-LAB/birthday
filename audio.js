// Web Audio API Sound Engine & Bollywood Romantic Music Player for Komal's Birthday Surprise

class AudioManager {
    constructor() {
        window.audioManager = this;
        this.ctx = null;
        this.masterGain = null;

        // 10 Real Romantic Songs from SONG/ directory
        // All songs start at 15 to 20 seconds (18s default) as requested ("sare song me 15 se 20 se baad start karo")
        this.playlist = [
            {
                id: 'aaj-se-teri',
                title: 'Aaj Se Teri',
                artist: 'Arijit Singh & Amit Trivedi',
                film: 'Padman (Akshay Kumar & Radhika Apte)',
                src: 'https://drive.usercontent.google.com/download?id=1SV23X_Tl1T5qBpsbJGlj2qYfS83m0RCI&export=download',
                introStart: 18,
                mainPart: 36,
                totalTime: '5:12',
                lyrics: '💍 "Aaj se teri saari galiyan meri ho gayi... aaj se mera ghar tera ho gaya" ❤️✨',
                mood: 'devotion'
            },
            {
                id: 'tum-ho-toh',
                title: 'Tum Ho Toh',
                artist: 'Vishal Mishra & Hansika Pareek',
                film: 'Saiyaara',
                src: 'https://drive.usercontent.google.com/download?id=1kqB3f31fX1WnQwD1bj3kAvpnCQmlLDcN&export=download',
                introStart: 18,
                mainPart: 42,
                totalTime: '5:16',
                lyrics: '🎶 "Tum ho toh har lamha haseen lagta hai... zameen aasmaan lagta hai" ❤️',
                mood: 'romantic'
            },
            {
                id: 'aitbaar',
                title: 'Aitbaar / Chand Mera Dil',
                artist: 'Faheem Abdullah & Sachin-Jigar',
                film: 'Chand Mera Dil',
                src: 'https://drive.usercontent.google.com/download?id=1S-0OHx5Yz8GoGV9GQiKPvmipyvzjnjG2&export=download',
                introStart: 18,
                mainPart: 44,
                totalTime: '3:26',
                lyrics: '✨ "Aitbaar... Chand mera dil, sitare teri aadaayein..." 🌙',
                mood: 'soulful'
            },
            {
                id: 'ishq-de-fanniyar',
                title: 'Ishq De Fanniyar (Female Version)',
                artist: 'Jyotica Tangri',
                film: 'Fukrey Returns',
                src: 'https://drive.usercontent.google.com/download?id=1OlfmXabr-kwUvw7-1nNOUkTspOuGWf3o&export=download',
                introStart: 18,
                mainPart: 34,
                totalTime: '3:02',
                lyrics: '🌸 "Karaan main tareefan... Meri cute Mithi Chinni ke fanniyar lada gaye!" 🍬',
                mood: 'playful'
            },
            {
                id: 'tujhko',
                title: 'Tujhko',
                artist: 'Arijit Singh',
                film: 'Cocktail 2',
                src: 'https://drive.usercontent.google.com/download?id=1Jgt2aHZGE16BTFAj4Sp29ytcjJhsmI5-&export=download',
                introStart: 18,
                mainPart: 48,
                totalTime: '5:36',
                lyrics: '👑 "Tujhko jo paaya toh sab mil gaya... meri har dua tu hi" ✨',
                mood: 'devotion'
            },
            {
                id: 'humdum',
                title: 'Humdum',
                artist: 'Vishal Mishra & Raj Shekhar',
                film: 'Savi',
                src: 'https://drive.usercontent.google.com/download?id=1Cex73-mB2UanKcrGT6ah3AwHo1HOk2Ns&export=download',
                introStart: 18,
                mainPart: 45,
                totalTime: '3:50',
                lyrics: '🤝 "Mera humdum tu, meri har saans me tu, meri pyari Sona..." 💖',
                mood: 'companion'
            },
            {
                id: 'ijazat',
                title: 'Ijazat',
                artist: 'Arijit Singh & Meet Bros',
                film: 'One Night Stand',
                src: 'https://drive.usercontent.google.com/download?id=1bacbLKpya7fHgitnr_9eTGKsIqLbpaSh&export=download',
                introStart: 18,
                mainPart: 38,
                totalTime: '2:18',
                lyrics: '💌 "Le qabool kar liya maine... dhoondhe har dafa tujhe hi dil mera" 🌹',
                mood: 'confession'
            },
            {
                id: 'tera-mera-rishta',
                title: 'Tera Mera Rishta (New Version)',
                artist: 'Mithoon, Saaj Bhatt & Mustafa',
                film: 'Awarapan 2',
                src: 'https://drive.usercontent.google.com/download?id=1TPsSQm8ISiF2m_-7MI48yM0QcF1sz6tn&export=download',
                introStart: 18,
                mainPart: 48,
                totalTime: '6:11',
                lyrics: '💍 "Tera mera rishta hai kaisa, ek pal door gawara nahi... Janam-janam ka nata" ♾️',
                mood: 'eternal'
            },
            {
                id: 'o-sanam',
                title: 'O Sanam',
                artist: 'Akhil Sachdeva',
                film: 'Single',
                src: 'https://drive.usercontent.google.com/download?id=1JNGJTA3DMb6Kc2KFYlFxWG1bavVbQKZ-&export=download',
                introStart: 18,
                mainPart: 52,
                totalTime: '4:31',
                lyrics: '🌹 "O Sanam... Tere bina jeena nahi meri Sona, har janam sirf tera" 💕',
                mood: 'eternal'
            },
            {
                id: 'barbaad',
                title: 'Barbaad',
                artist: 'Jubin Nautiyal & The Rish',
                film: 'Saiyaara',
                src: 'https://drive.usercontent.google.com/download?id=1tbK1lNsf-tPoSJ1s0v8aHVEooCcmXv-D&export=download',
                introStart: 18,
                mainPart: 46,
                totalTime: '5:54',
                lyrics: '🎆 "Barbaad ho gaye hum tere pyaar mein... Happy 23rd Birthday Mithi Chinni!" 🎂',
                mood: 'celebration'
            }
        ];

        this.currentTrackIndex = 0;
        this.isPlayingBGM = false; // Tracks if an optional showcase song is playing
        this.audio = new Audio();
        this.audio.preload = 'auto';
        this.audio.volume = 1.0; // Always 100% full volume!

        // Primary Global Special Dedication Song (Continuous Looping BGM for Entire Website)
        // From C:\BIRTHDAY SUPRISE\SONG\speacial song (All 3 parts: intro, chime, main melody)
        this.specialTracks = [
            'special-song-intro.mp3',
            'special-song-chime.mp3',
            'special-song-main.mp3'
        ];
        this.specialTrackIdx = 0;
        this.useTrackSequence = false;

        this.specialAudio = new Audio('special-song-combined.mp3');
        this.specialAudio.preload = 'auto';
        this.specialAudio.volume = 1.0; // Always 100% full volume!
        this.specialAudio.loop = false; // False so ended event can trigger transition to Aaj Se Teri!
        this.isPlayingSpecial = false;
        this.specialEndedHandled = false;
        this.specialSongFinished = false;
        this.duckTimer = null;
        this.isSkippingToNext = false;
        this.outroSkipSeconds = 13; // Skip trailing 10 to 15 seconds on every Bollywood track!
        this.activeSource = 'special'; // 'special' or 'bollywood'

        this.setupAudioListeners();
        this.setupSpecialAudioListeners();
    }

    init() {
        if (!this.ctx) {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            if (AudioCtx) {
                this.ctx = new AudioCtx();
                this.masterGain = this.ctx.createGain();
                this.masterGain.gain.setValueAtTime(0.4, this.ctx.currentTime); // Crisp, gentle SFX level so sound effects never clip or distort
                this.masterGain.connect(this.ctx.destination);
            }
        }
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    setupAudioListeners() {
        this.audio.addEventListener('timeupdate', () => {
            this.updateTrackProgress();

            // Outro Skip: Cut off last 10-15 seconds (13s) and jump seamlessly to the next song!
            // "sare song me picche se 10 se 15 sec play nahi ho skip ho jaye next song pe, special song chor ke"
            const dur = this.audio.duration;
            const cur = this.audio.currentTime;
            if (dur && dur > 30 && cur >= (dur - this.outroSkipSeconds) && !this.isSkippingToNext && this.isPlayingBGM) {
                this.isSkippingToNext = true;
                console.log(`Ending outro reached (${this.outroSkipSeconds}s remaining). Transitioning to next song...`);
                this.playNext();
            }
        });

        this.audio.addEventListener('ended', () => {
            // After song finishes, continue to the next song in order!
            // "uske baad continue sara song ijzat se continue"
            if (!this.isSkippingToNext) {
                this.isSkippingToNext = true;
                this.playNext();
            }
        });

        this.audio.addEventListener('play', () => {
            this.isPlayingBGM = true;
            this.syncUIState(true);
            this.syncHUDState(true);
        });

        this.audio.addEventListener('pause', () => {
            this.isPlayingBGM = false;
            this.syncUIState(false);
        });
    }

    formatTime(seconds) {
        if (isNaN(seconds) || seconds < 0) return '0:00';
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }

    // =========================================================================
    // PRIMARY SPECIAL SONG SYSTEM (Plays continuously across whole website)
    // From C:\BIRTHDAY SUPRISE\SONG\speacial song
    // =========================================================================
    setupSpecialAudioListeners() {
        this.specialAudio.addEventListener('timeupdate', () => {
            this.updateSpecialSongProgress();
        });

        this.specialAudio.addEventListener('play', () => {
            this.isPlayingSpecial = true;
            this.syncSpecialUI(true);
            this.syncHUDState(true);
        });

        this.specialAudio.addEventListener('pause', () => {
            this.isPlayingSpecial = false;
            this.syncSpecialUI(false);
            if (!this.isPlayingBGM) {
                this.syncHUDState(false);
            }
        });

        this.specialAudio.addEventListener('ended', () => {
            this.handleSpecialSongEnded();
        });

        // Safety fallback: if audio reaches end of duration
        this.specialAudio.addEventListener('timeupdate', () => {
            this.updateSpecialSongProgress();
            const cur = this.specialAudio.currentTime;
            const dur = this.specialAudio.duration;
            if (dur && dur > 10 && cur >= (dur - 0.4)) {
                this.handleSpecialSongEnded();
            }
        });

        this.specialAudio.addEventListener('error', (e) => {
            console.warn('Special audio error or stall, activating 3-part sequence fallback:', e);
            if (!this.useTrackSequence) {
                this.useTrackSequence = true;
                this.specialTrackIdx = 0;
                this.specialAudio.loop = false;
                this.specialAudio.src = this.specialTracks[0];
                this.specialAudio.load();
                if (this.isPlayingSpecial) {
                    this.specialAudio.play().catch(() => {});
                }
            }
        });
    }

    handleSpecialSongEnded() {
        if (this.specialEndedHandled) return;
        this.specialEndedHandled = true;

        if (this.useTrackSequence && this.specialTrackIdx < this.specialTracks.length - 1) {
            this.specialTrackIdx++;
            this.specialAudio.src = this.specialTracks[this.specialTrackIdx];
            this.specialAudio.play().catch(() => {});
            this.specialEndedHandled = false;
        } else {
            console.log('Special Song completed! Transitioning automatically to Aaj Se Teri from 18s...');
            this.isPlayingSpecial = false;
            this.specialSongFinished = true;
            this.syncSpecialUI(false);
            // Play Aaj Se Teri (track 0) starting at 18s (15-20s mark)!
            this.playTrack(0, 18);
        }
    }

    playSpecialSong() {
        this.init();
        // If Special Song has already finished, or Bollywood BGM is active, NEVER overwrite it!
        // "continus play overwrite nahi hona chaiyea"
        if (this.specialSongFinished || this.isPlayingBGM || (this.audio.src && !this.audio.paused)) {
            return;
        }

        this.activeSource = 'special';

        if (this.isPlayingSpecial && !this.specialAudio.paused) {
            this.syncSpecialUI(true);
            this.syncHUDState(true);
            return;
        }

        this.specialEndedHandled = false;

        // Always ensure special song starts from beginning (0:00) when requested!
        if (this.specialAudio.ended || this.specialAudio.currentTime >= 98) {
            this.specialAudio.currentTime = 0;
        }

        this.specialAudio.volume = 1.0;
        const promise = this.specialAudio.play();
        if (promise !== undefined) {
            promise.then(() => {
                this.isPlayingSpecial = true;
                this.activeSource = 'special';
                this.syncSpecialUI(true);
                this.syncHUDState(true);
            }).catch(err => {
                console.log('Autoplay waiting for initial user interaction:', err);
                this.isPlayingSpecial = false;
                this.syncSpecialUI(false);
            });
        }
    }

    forcePlaySpecialSong(resetTime = true) {
        this.init();
        if (this.isPlayingBGM || (this.audio && !this.audio.paused)) {
            this.audio.pause();
            this.isPlayingBGM = false;
            this.syncUIState(false);
        }
        this.activeSource = 'special';
        this.specialSongFinished = false;
        if (resetTime || this.specialAudio.ended || this.specialAudio.currentTime >= 98) {
            this.specialAudio.currentTime = 0;
        }
        this.specialEndedHandled = false;
        this.specialAudio.volume = 1.0;
        const promise = this.specialAudio.play();
        if (promise !== undefined) {
            promise.then(() => {
                this.isPlayingSpecial = true;
                this.activeSource = 'special';
                this.syncSpecialUI(true);
                this.syncHUDState(true);
            }).catch((e) => {
                console.warn('Special audio play blocked:', e);
            });
        }
    }

    pauseSpecialSong() {
        this.specialAudio.pause();
        this.isPlayingSpecial = false;
        this.activeSource = 'special';
        this.syncSpecialUI(false);
        this.syncHUDState(false);
    }

    toggleSpecialSong() {
        if (this.isPlayingSpecial && !this.specialAudio.paused) {
            this.pauseSpecialSong();
            return false;
        } else {
            this.forcePlaySpecialSong(false);
            return true;
        }
    }

    syncHUDState(isPlaying) {
        const hudBgmBtn = document.getElementById('hud-bgm-toggle');
        if (hudBgmBtn) {
            hudBgmBtn.classList.toggle('active', isPlaying);
        }
        const masterPlayBtn = document.getElementById('master-play-btn');
        if (masterPlayBtn) {
            masterPlayBtn.textContent = isPlaying ? '⏸' : '▶';
        }
        const floatingPlayer = document.getElementById('floating-master-player');
        if (floatingPlayer) {
            floatingPlayer.classList.toggle('is-playing', isPlaying);
        }
    }

    updateSpecialSongProgress() {
        const cur = this.specialAudio.currentTime || 0;
        const dur = this.specialAudio.duration || 101; // 101 seconds
        const pct = Math.min(100, (cur / dur) * 100);

        const fill = document.getElementById('quiz-special-progress-fill');
        const timeEl = document.getElementById('quiz-special-time');

        if (fill) fill.style.width = `${pct}%`;
        if (timeEl) timeEl.textContent = `${this.formatTime(cur)} / ${this.formatTime(dur)}`;
    }

    isQuizActive() {
        const quizOverlay = document.getElementById('quiz-overlay');
        const surpriseModal = document.getElementById('surprise-modal');
        const isOverlayOpen = quizOverlay && !quizOverlay.classList.contains('hidden');
        const isModalOpen = surpriseModal && surpriseModal.classList.contains('active');
        const isBodyActive = document.body && document.body.classList.contains('quiz-active');
        return isOverlayOpen || isModalOpen || isBodyActive;
    }

    syncSpecialUI(isPlaying) {
        const playIcon = document.getElementById('quiz-special-play-icon');
        const eqEl = document.getElementById('quiz-music-eq');
        const bannerEl = document.getElementById('quiz-special-music-banner');

        if (playIcon) playIcon.textContent = isPlaying ? '⏸' : '▶';
        if (eqEl) eqEl.classList.toggle('playing', isPlaying);
        if (bannerEl) bannerEl.classList.toggle('is-playing', isPlaying);

        // Reflect on Floating Master Player (Only when quiz/modal is NOT active)
        const floatingPlayer = document.getElementById('floating-master-player');
        const masterTitle = document.getElementById('master-player-title');
        const masterArtist = document.getElementById('master-player-artist');
        const masterPlayBtn = document.getElementById('master-play-btn');
        const lyricsPill = document.getElementById('floating-lyrics-pill');

        const quizActive = this.isQuizActive();

        if (floatingPlayer) {
            if (quizActive) {
                floatingPlayer.classList.add('collapsed');
                floatingPlayer.classList.remove('is-playing');
            } else if (isPlaying) {
                floatingPlayer.classList.remove('collapsed');
                floatingPlayer.classList.add('is-playing');
            } else if (!this.isPlayingBGM) {
                floatingPlayer.classList.remove('is-playing');
            }
        }

        if (masterTitle && isPlaying) {
            masterTitle.textContent = 'Special Dedication Song 🍬';
        }
        if (masterArtist && isPlaying) {
            masterArtist.textContent = "Babu's Voice & Heartfelt Melody 💕";
        }
        if (masterPlayBtn && !this.isPlayingBGM) {
            masterPlayBtn.textContent = isPlaying ? '⏸' : '▶';
        }
        if (lyricsPill) {
            if (quizActive) {
                lyricsPill.classList.add('hidden');
            } else if (isPlaying) {
                lyricsPill.innerHTML = `<span>🍬</span> <span>"Special Dedication for Meri Mithi Chinni Komal ❤️"</span>`;
                lyricsPill.classList.remove('hidden');
            } else if (!this.isPlayingBGM) {
                lyricsPill.classList.add('hidden');
            }
        }
    }

    // Play showcase favorite track on manual user click: strictly starts from 30s
    playTrack(index, startTime = null) {
        this.init();
        this.isSkippingToNext = false;
        this.activeSource = 'bollywood';
        // Pause the special song so the chosen showcase track can play
        if (this.isPlayingSpecial || (this.specialAudio && !this.specialAudio.paused)) {
            this.specialAudio.pause();
            this.isPlayingSpecial = false;
            this.syncSpecialUI(false);
        }
        if (index < 0) index = this.playlist.length - 1;
        if (index >= this.playlist.length) index = 0;

        const track = this.playlist[index];
        const isSameTrack = (this.currentTrackIndex === index && Boolean(this.audio.src));

        // Start at 15-20 seconds (18s default or track.introStart) unless user explicitly scrubbed or main part requested
        let seekTo = startTime;
        if (seekTo === null || seekTo === undefined) {
            seekTo = (track && track.introStart) ? track.introStart : 18; // 15 to 20 seconds
        }

        if (!isSameTrack) {
            this.currentTrackIndex = index;
            this.audio.src = track.src;
            this.audio.volume = 1.0;
            this.audio.load();

            const onCanPlay = () => {
                try {
                    this.audio.currentTime = seekTo;
                } catch (e) {}
                const p = this.audio.play();
                if (p !== undefined) {
                    p.then(() => {
                        this.isPlayingBGM = true;
                        try {
                            if (Math.abs(this.audio.currentTime - seekTo) > 2) {
                                this.audio.currentTime = seekTo;
                            }
                        } catch (e) {}
                        this.syncUIState(true);
                        this.syncHUDState(true);
                    }).catch(e => {
                        console.log('Showcase audio play policy:', e);
                    });
                }
            };

            this.audio.addEventListener('canplay', onCanPlay, { once: true });
        } else {
            try {
                this.audio.currentTime = seekTo;
            } catch (e) {}

            this.audio.volume = 1.0;
            const playPromise = this.audio.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    this.isPlayingBGM = true;
                    try {
                        if (Math.abs(this.audio.currentTime - seekTo) > 2) {
                            this.audio.currentTime = seekTo;
                        }
                    } catch (e) {}
                    this.syncUIState(true);
                    this.syncHUDState(true);
                }).catch(e => {
                    console.log('Showcase audio play policy:', e);
                });
            }
        }
    }

    // Jump directly to the chorus/hook/main part of active song!
    playMainPart(index) {
        this.init();
        if (this.activeSource === 'special' || this.isPlayingSpecial) {
            this.specialAudio.currentTime = 35;
            const p = this.specialAudio.play();
            if (p !== undefined) {
                p.then(() => {
                    this.isPlayingSpecial = true;
                    this.activeSource = 'special';
                    this.syncSpecialUI(true);
                    this.syncHUDState(true);
                }).catch(() => {});
            }
            if (window.particleEngine) {
                particleEngine.launchConfetti(window.innerWidth / 2, window.innerHeight * 0.4, 75);
            }
            return;
        }

        const track = this.playlist[index];
        if (!track) return;
        this.playTrack(index, track.mainPart);

        // Visual celebration burst for the main romantic part!
        if (window.particleEngine) {
            particleEngine.launchConfetti(window.innerWidth / 2, window.innerHeight * 0.4, 70);
        }
    }

    pauseTrack() {
        this.audio.pause();
        this.isPlayingBGM = false;
        this.activeSource = 'bollywood';
        this.syncUIState(false);
        this.syncHUDState(false);
    }

    togglePlay() {
        this.init();

        const isSpecialActive = (!this.specialAudio.paused && !this.specialAudio.ended && this.specialAudio.currentTime > 0) || this.isPlayingSpecial;
        const isBollywoodActive = (!this.audio.paused && !this.audio.ended && this.audio.currentTime > 0) || this.isPlayingBGM;

        if (isBollywoodActive) {
            this.pauseTrack();
            return false;
        } else if (isSpecialActive) {
            this.pauseSpecialSong();
            return false;
        } else {
            // Both are paused -> resume active source
            if (this.activeSource === 'bollywood' && this.audio.src) {
                this.audio.volume = 1.0;
                const p = this.audio.play();
                if (p !== undefined) {
                    p.then(() => {
                        this.isPlayingBGM = true;
                        this.syncUIState(true);
                        this.syncHUDState(true);
                    }).catch(() => {
                        this.forcePlaySpecialSong(false);
                    });
                }
                return true;
            } else {
                this.forcePlaySpecialSong(false);
                return true;
            }
        }
    }

    playNext() {
        this.isSkippingToNext = false;
        if (this.activeSource === 'special' || this.isPlayingSpecial) {
            // Skip to first Bollywood song (Aaj Se Teri)
            this.playTrack(0, 18);
            return;
        }
        const nextIdx = (this.currentTrackIndex + 1) % this.playlist.length;
        this.playTrack(nextIdx, 18);
    }

    playPrev() {
        this.isSkippingToNext = false;
        if (this.activeSource === 'special' || this.isPlayingSpecial) {
            this.specialAudio.currentTime = 0;
            this.specialAudio.play().catch(() => {});
            return;
        }
        const prevIdx = (this.currentTrackIndex - 1 + this.playlist.length) % this.playlist.length;
        this.playTrack(prevIdx, 18);
    }

    seek(percentage) {
        if (this.activeSource === 'special' || this.isPlayingSpecial) {
            const targetTime = percentage * (this.specialAudio.duration || 101);
            this.specialAudio.currentTime = targetTime;
            return;
        }
        if (!this.audio.duration) return;
        const targetTime = percentage * this.audio.duration;
        this.audio.currentTime = targetTime;
        if (targetTime < this.audio.duration - 15) {
            this.isSkippingToNext = false;
        }
    }

    startBGM() {
        this.playSpecialSong();
    }

    stopBGM() {
        this.pauseSpecialSong();
        if (this.isPlayingBGM || !this.audio.paused) {
            this.audio.pause();
            this.isPlayingBGM = false;
            this.syncUIState(false);
            this.syncHUDState(false);
        }
    }

    toggleBGM() {
        return this.togglePlay();
    }

    // =========================================================================
    // SITUATIONAL SWITCHER: All automatic song switching removed as requested!
    // ("jo phale ka song tha sara hata do play se bas so case kar faviroute song mn ho to baja sake")
    // The Special Dedication Song plays continuously as the website's background.
    // =========================================================================
    triggerSituation(situation) {
        // Keeps Special Song playing uninterrupted!
    }

    // Sync all UI components (interlude cards, floating player, lyrics pill, and HUD button)
    syncUIState(isPlaying) {
        const curTrack = this.playlist[this.currentTrackIndex];

        // 1. Update HUD button
        const hudBgmBtn = document.getElementById('hud-bgm-toggle');
        if (hudBgmBtn) {
            hudBgmBtn.classList.toggle('active', isPlaying);
        }

        // 2. Update all Interlude Cards
        const interludeCards = document.querySelectorAll('.music-interlude-section');
        interludeCards.forEach(sec => {
            const songIdx = parseInt(sec.getAttribute('data-song-index'), 10);
            const card = sec.querySelector('.music-interlude-card');
            const playBtn = sec.querySelector('.btn-song-play');
            const playText = sec.querySelector('.play-text');
            const playIcon = sec.querySelector('.play-icon');

            if (songIdx === this.currentTrackIndex) {
                if (card) card.classList.toggle('is-playing', isPlaying);
                if (playText) playText.textContent = isPlaying ? 'Pause' : 'Play Song';
                if (playIcon) playIcon.textContent = isPlaying ? '⏸' : '▶';
            } else {
                if (card) card.classList.remove('is-playing');
                if (playText) playText.textContent = 'Play Song';
                if (playIcon) playIcon.textContent = '▶';
            }
        });

        // 3. Update Floating Master Player
        const floatingPlayer = document.getElementById('floating-master-player');
        const masterTitle = document.getElementById('master-player-title');
        const masterArtist = document.getElementById('master-player-artist');
        const masterPlayBtn = document.getElementById('master-play-btn');

        const quizActive = this.isQuizActive();

        if (floatingPlayer) {
            if (quizActive) {
                floatingPlayer.classList.add('collapsed');
                floatingPlayer.classList.remove('is-playing');
            } else {
                floatingPlayer.classList.remove('collapsed');
                floatingPlayer.classList.toggle('is-playing', isPlaying);
            }
        }
        if (masterTitle && curTrack) {
            masterTitle.textContent = `${curTrack.title} — ${curTrack.film}`;
        }
        if (masterArtist && curTrack) {
            masterArtist.textContent = curTrack.artist;
        }
        if (masterPlayBtn) {
            masterPlayBtn.textContent = isPlaying ? '⏸' : '▶';
        }

        // 4. Update Floating Lyrics Pill
        const lyricsPill = document.getElementById('floating-lyrics-pill');
        if (lyricsPill && curTrack) {
            if (!quizActive && isPlaying) {
                lyricsPill.innerHTML = `<span>🎵</span> <span>${curTrack.lyrics}</span>`;
                lyricsPill.classList.remove('hidden');
            } else {
                lyricsPill.classList.add('hidden');
            }
        }
    }

    // Live update for scrubbers and timestamps
    updateTrackProgress() {
        const cur = this.audio.currentTime || 0;
        const dur = this.audio.duration || 1;
        const pct = Math.min(100, (cur / dur) * 100);

        // Update active interlude card scrubber
        const activeSec = document.querySelector(`.music-interlude-section[data-song-index="${this.currentTrackIndex}"]`);
        if (activeSec) {
            const fill = activeSec.querySelector('.music-progress-bar-fill');
            const curTimeEl = activeSec.querySelector('.cur-time');
            const totalTimeEl = activeSec.querySelector('.total-time');

            if (fill) fill.style.width = `${pct}%`;
            if (curTimeEl) curTimeEl.textContent = this.formatTime(cur);
            if (totalTimeEl && this.audio.duration) totalTimeEl.textContent = this.formatTime(dur);
        }
    }

    // Briefly duck song volume slightly (to 0.70) for sound effects, strictly 0.5s (500ms), then return to FULL 1.0 sound!
    // "audio song full he rakho hamesa bas effect pe thora 0.5 sec ka low uske baad continue full sound pe karo"
    duckVolume() {
        if (this.duckTimer) {
            clearTimeout(this.duckTimer);
            this.duckTimer = null;
        }

        // Slight dip for 0.5 seconds so sound effect is crisp without muting the song
        const duckedVol = 0.70;
        if (this.audio) this.audio.volume = duckedVol;
        if (this.specialAudio) this.specialAudio.volume = duckedVol;

        // Strictly after 0.5 seconds (500ms), return to 100% FULL sound!
        this.duckTimer = setTimeout(() => {
            if (this.audio) this.audio.volume = 1.0;
            if (this.specialAudio) this.specialAudio.volume = 1.0;
            this.duckTimer = null;
        }, 500);
    }

    // =========================================================================
    // SYNTHESIZED SOUND EFFECTS (Kept & Enhanced)
    // =========================================================================
    playNote(freq, time = 0, duration = 1.6, type = 'sine', volume = 0.2) {
        this.init();
        if (!this.ctx) return;
        try {
            const osc = this.ctx.createOscillator();
            const noteGain = this.ctx.createGain();
            const filter = this.ctx.createBiquadFilter();

            osc.type = type;
            osc.frequency.setValueAtTime(freq, this.ctx.currentTime + time);
            filter.type = 'lowpass';
            filter.frequency.setValueAtTime(1200, this.ctx.currentTime + time);

            const startTime = this.ctx.currentTime + time;
            noteGain.gain.setValueAtTime(0.0001, startTime);
            noteGain.gain.exponentialRampToValueAtTime(volume * 0.3, startTime + 0.08);
            noteGain.gain.exponentialRampToValueAtTime(0.00001, startTime + duration);

            osc.connect(filter);
            filter.connect(noteGain);
            noteGain.connect(this.masterGain);

            osc.start(startTime);
            osc.stop(startTime + duration + 0.1);
        } catch (e) {}
    }

    playPop() {
        this.init();
        this.duckVolume();
        if (!this.ctx) return;
        try {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            const now = this.ctx.currentTime;

            osc.type = 'triangle';
            osc.frequency.setValueAtTime(450, now);
            osc.frequency.exponentialRampToValueAtTime(60, now + 0.08);

            gain.gain.setValueAtTime(0.4, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);

            osc.connect(gain);
            gain.connect(this.masterGain);
            osc.start(now);
            osc.stop(now + 0.09);

            this.playChime(now + 0.06);
        } catch (e) {}
    }

    playChime(offset = 0) {
        this.init();
        if (!this.ctx) return;
        const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
        notes.forEach((freq, i) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            const t = this.ctx.currentTime + offset + (i * 0.07);

            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, t);

            gain.gain.setValueAtTime(0.001, t);
            gain.gain.exponentialRampToValueAtTime(0.18, t + 0.02);
            gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.6);

            osc.connect(gain);
            gain.connect(this.masterGain);
            osc.start(t);
            osc.stop(t + 0.65);
        });
    }

    playBlowCandle() {
        this.init();
        this.duckVolume();
        if (!this.ctx) return;
        try {
            const bufferSize = this.ctx.sampleRate * 0.8;
            const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
            const data = buffer.getChannelData(0);
            for (let i = 0; i < bufferSize; i++) {
                data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.4));
            }

            const noise = this.ctx.createBufferSource();
            noise.buffer = buffer;

            const filter = this.ctx.createBiquadFilter();
            filter.type = 'bandpass';
            filter.frequency.setValueAtTime(600, this.ctx.currentTime);
            filter.Q.setValueAtTime(3, this.ctx.currentTime);

            const gain = this.ctx.createGain();
            gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.7);

            noise.connect(filter);
            filter.connect(gain);
            gain.connect(this.masterGain);

            noise.start();
        } catch (e) {}
    }

    playCelebrationFanfare() {
        this.init();
        this.duckVolume();
        if (!this.ctx) return;
        const melody = [
            { f: 293.66, d: 0.25, p: 0.0 },
            { f: 293.66, d: 0.25, p: 0.28 },
            { f: 329.63, d: 0.45, p: 0.55 },
            { f: 293.66, d: 0.45, p: 1.05 },
            { f: 392.00, d: 0.55, p: 1.55 },
            { f: 369.99, d: 0.85, p: 2.15 },
        ];

        melody.forEach(n => {
            this.playNote(n.f, n.p, n.d * 1.5, 'triangle', 0.25);
            this.playNote(n.f * 2, n.p + 0.02, n.d, 'sine', 0.1);
        });

        for (let i = 0; i < 4; i++) {
            setTimeout(() => {
                this.playFireworkBurst();
            }, i * 600 + 400);
        }
    }

    playFireworkBurst() {
        this.init();
        if (!this.ctx) return;
        try {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            const now = this.ctx.currentTime;

            osc.type = 'sine';
            osc.frequency.setValueAtTime(160, now);
            osc.frequency.exponentialRampToValueAtTime(30, now + 0.35);

            gain.gain.setValueAtTime(0.5, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);

            osc.connect(gain);
            gain.connect(this.masterGain);
            osc.start(now);
            osc.stop(now + 0.42);

            setTimeout(() => {
                this.playChime();
            }, 150);
        } catch (e) {}
    }

    playDodge() {
        this.init();
        if (!this.ctx) return;
        try {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            const now = this.ctx.currentTime;

            osc.type = 'sine';
            osc.frequency.setValueAtTime(250, now);
            osc.frequency.exponentialRampToValueAtTime(700, now + 0.12);
            osc.frequency.exponentialRampToValueAtTime(300, now + 0.22);

            gain.gain.setValueAtTime(0.2, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);

            osc.connect(gain);
            gain.connect(this.masterGain);
            osc.start(now);
            osc.stop(now + 0.26);
        } catch (e) {}
    }
}

// Instantiate global audio manager
const audioManager = new AudioManager();
window.audioManager = audioManager;
