import { LeaguesData, ColumnExplanations } from './types';

export const newNotifications = [{
  avatar: '/placeholder.svg',
  fallback: 'TA',
  alt: 'Team A',
  message: 'New message from Team A',
  time: '2 minutes ago'
}, {
  avatar: '/placeholder.svg',
  fallback: 'EV',
  alt: 'Event',
  message: 'Upcoming event: Tournament Finals',
  time: '1 hour ago'
}];

export const earlierNotifications = [{
  avatar: '/placeholder.svg',
  fallback: 'LG',
  alt: 'League',
  message: 'League standings updated',
  time: 'Yesterday, 3:45 PM'
}, {
  avatar: '/placeholder.svg',
  fallback: 'TM',
  alt: 'Team Manager',
  message: 'New team joined the league',
  time: 'May 15, 2024'
}];

export const columnExplanations: ColumnExplanations = {
  'GP': 'Games Played',
  'W': 'Wins (3 points)',
  'L': 'Losses (0 points)',
  'T': 'Ties (1.5 points)',
  'CW': 'Captain Wins (5 points)',
  'ATT': 'Attendance (1 point)',
  'N-ATT': 'Non-Attendance (-1 point)',
  'Pts': 'Total Points'
};

export const mockLeaguesData: LeaguesData = {
  'premier-league': {
    name: "Premier League",
    date: "12-Feb-2024",
    players: 17,
    totalGames: 10,
    logo: "/placeholder.svg?height=64&width=64",
    leaderboardData: [{
      rank: 1,
      name: "John Doe",
      gamesPlayed: 10,
      win: 8,
      loss: 1,
      tie: 1,
      captainWin: 2,
      attendance: 9,
      nonAttendance: 1,
      points: 48.5
    }, {
      rank: 2,
      name: "Jane Smith",
      gamesPlayed: 9,
      win: 7,
      loss: 1,
      tie: 1,
      captainWin: 1,
      attendance: 8,
      nonAttendance: 1,
      points: 41
    }, {
      rank: 3,
      name: "Mike Johnson",
      gamesPlayed: 10,
      win: 6,
      loss: 3,
      tie: 1,
      captainWin: 1,
      attendance: 9,
      nonAttendance: 1,
      points: 35.5
    }, {
      rank: 4,
      name: "Emily Brown",
      gamesPlayed: 8,
      win: 5,
      loss: 2,
      tie: 1,
      captainWin: 1,
      attendance: 7,
      nonAttendance: 1,
      points: 30
    }, {
      rank: 5,
      name: "Chris Lee",
      gamesPlayed: 10,
      win: 4,
      loss: 5,
      tie: 1,
      captainWin: 1,
      attendance: 8,
      nonAttendance: 2,
      points: 24.5
    }, {
      rank: 6,
      name: "Sarah Davis",
      gamesPlayed: 9,
      win: 4,
      loss: 4,
      tie: 1,
      captainWin: 0,
      attendance: 9,
      nonAttendance: 0,
      points: 23
    }, {
      rank: 7,
      name: "Tom Wilson",
      gamesPlayed: 7,
      win: 3,
      loss: 3,
      tie: 1,
      captainWin: 1,
      attendance: 6,
      nonAttendance: 1,
      points: 19.5
    }, {
      rank: 8,
      name: "Emma Taylor",
      gamesPlayed: 10,
      win: 3,
      loss: 6,
      tie: 1,
      captainWin: 0,
      attendance: 9,
      nonAttendance: 1,
      points: 17.5
    }, {
      rank: 9,
      name: "David Clark",
      gamesPlayed: 8,
      win: 2,
      loss: 5,
      tie: 1,
      captainWin: 0,
      attendance: 7,
      nonAttendance: 1,
      points: 15
    }, {
      rank: 10,
      name: "Lisa Martin",
      gamesPlayed: 9,
      win: 2,
      loss: 6,
      tie: 1,
      captainWin: 1,
      attendance: 9,
      nonAttendance: 0,
      points: 13.5
    }, {
      rank: 11,
      name: "Kevin White",
      gamesPlayed: 6,
      win: 1,
      loss: 4,
      tie: 1,
      captainWin: 0,
      attendance: 5,
      nonAttendance: 1,
      points: 9.5
    }, {
      rank: 12,
      name: "Anna Brown",
      gamesPlayed: 10,
      win: 1,
      loss: 8,
      tie: 1,
      captainWin: 0,
      attendance: 9,
      nonAttendance: 1,
      points: 9.5
    }, {
      rank: 13,
      name: "Mark Johnson",
      gamesPlayed: 7,
      win: 1,
      loss: 5,
      tie: 1,
      captainWin: 0,
      attendance: 6,
      nonAttendance: 1,
      points: 7.5
    }, {
      rank: 14,
      name: "Sophie Lee",
      gamesPlayed: 8,
      win: 1,
      loss: 6,
      tie: 1,
      captainWin: 0,
      attendance: 7,
      nonAttendance: 1,
      points: 8.5
    }, {
      rank: 15,
      name: "Ryan Davis",
      gamesPlayed: 9,
      win: 0,
      loss: 8,
      tie: 1,
      captainWin: 0,
      attendance: 8,
      nonAttendance: 1,
      points: 6.5
    }, {
      rank: 16,
      name: "Olivia Wilson",
      gamesPlayed: 5,
      win: 0,
      loss: 4,
      tie: 1,
      captainWin: 0,
      attendance: 4,
      nonAttendance: 1,
      points: 5.5
    }, {
      rank: 17,
      name: "Daniel Taylor",
      gamesPlayed: 7,
      win: 0,
      loss: 6,
      tie: 1,
      captainWin: 0,
      attendance: 6,
      nonAttendance: 1,
      points: 4.5
    }]
  },
  'champions-league': {
    name: "Champions League",
    date: "15-Feb-2024",
    players: 24,
    totalGames: 8,
    logo: "/placeholder.svg?height=64&width=64",
    leaderboardData: [{
      rank: 1,
      name: "Alex Johnson",
      gamesPlayed: 8,
      win: 7,
      loss: 0,
      tie: 1,
      captainWin: 1,
      attendance: 8,
      nonAttendance: 0,
      points: 39
    }, {
      rank: 2,
      name: "Sarah Williams",
      gamesPlayed: 7,
      win: 6,
      loss: 0,
      tie: 1,
      captainWin: 1,
      attendance: 7,
      nonAttendance: 0,
      points: 33
    }, {
      rank: 3,
      name: "Tom Brown",
      gamesPlayed: 8,
      win: 5,
      loss: 2,
      tie: 1,
      captainWin: 1,
      attendance: 8,
      nonAttendance: 0,
      points: 31
    }, {
      rank: 4,
      name: "Emma Davis",
      gamesPlayed: 7,
      win: 4,
      loss: 2,
      tie: 1,
      captainWin: 1,
      attendance: 7,
      nonAttendance: 0,
      points: 25
    }, {
      rank: 5,
      name: "Michael Wilson",
      gamesPlayed: 8,
      win: 3,
      loss: 4,
      tie: 1,
      captainWin: 1,
      attendance: 8,
      nonAttendance: 0,
      points: 21
    }, {
      rank: 6,
      name: "Olivia Taylor",
      gamesPlayed: 6,
      win: 3,
      loss: 2,
      tie: 1,
      captainWin: 0,
      attendance: 6,
      nonAttendance: 0,
      points: 18
    }, {
      rank: 7,
      name: "Daniel Clark",
      gamesPlayed: 8,
      win: 2,
      loss: 5,
      tie: 1,
      captainWin: 0,
      attendance: 8,
      nonAttendance: 0,
      points: 16
    }, {
      rank: 8,
      name: "Sophia Martin",
      gamesPlayed: 7,
      win: 2,
      loss: 4,
      tie: 1,
      captainWin: 0,
      attendance: 7,
      nonAttendance: 0,
      points: 13
    }, {
      rank: 9,
      name: "William White",
      gamesPlayed: 5,
      win: 1,
      loss: 3,
      tie: 1,
      captainWin: 0,
      attendance: 5,
      nonAttendance: 0,
      points: 10
    }, {
      rank: 10,
      name: "Isabella Brown",
      gamesPlayed: 7,
      win: 1,
      loss: 5,
      tie: 1,
      captainWin: 0,
      attendance: 7,
      nonAttendance: 0,
      points: 9
    }, {
      rank: 11,
      name: "James Lee",
      gamesPlayed: 8,
      win: 0,
      loss: 7,
      tie: 1,
      captainWin: 0,
      attendance: 8,
      nonAttendance: 0,
      points: 7
    }, {
      rank: 12,
      name: "Sophie Anderson",
      gamesPlayed: 6,
      win: 0,
      loss: 5,
      tie: 1,
      captainWin: 0,
      attendance: 6,
      nonAttendance: 0,
      points: 6
    }, {
      rank: 13,
      name: "Ethan Harris",
      gamesPlayed: 8,
      win: 7,
      loss: 0,
      tie: 1,
      captainWin: 1,
      attendance: 8,
      nonAttendance: 0,
      points: 36
    }, {
      rank: 14,
      name: "Ava Thompson",
      gamesPlayed: 7,
      win: 6,
      loss: 0,
      tie: 1,
      captainWin: 1,
      attendance: 7,
      nonAttendance: 0,
      points: 30
    }, {
      rank: 15,
      name: "Noah Martinez",
      gamesPlayed: 8,
      win: 5,
      loss: 2,
      tie: 1,
      captainWin: 1,
      attendance: 8,
      nonAttendance: 0,
      points: 28
    }, {
      rank: 16,
      name: "Mia Robinson",
      gamesPlayed: 6,
      win: 4,
      loss: 1,
      tie: 1,
      captainWin: 0,
      attendance: 6,
      nonAttendance: 0,
      points: 22
    }, {
      rank: 17,
      name: "Liam Clark",
      gamesPlayed: 8,
      win: 3,
      loss: 4,
      tie: 1,
      captainWin: 1,
      attendance: 8,
      nonAttendance: 0,
      points: 20
    }, {
      rank: 18,
      name: "Charlotte Walker",
      gamesPlayed: 5,
      win: 3,
      loss: 1,
      tie: 1,
      captainWin: 1,
      attendance: 5,
      nonAttendance: 0,
      points: 17
    }, {
      rank: 19,
      name: "Mason Hall",
      gamesPlayed: 7,
      win: 2,
      loss: 4,
      tie: 1,
      captainWin: 0,
      attendance: 7,
      nonAttendance: 0,
      points: 14
    }, {
      rank: 20,
      name: "Amelia Young",
      gamesPlayed: 6,
      win: 2,
      loss: 3,
      tie: 1,
      captainWin: 0,
      attendance: 6,
      nonAttendance: 0,
      points: 13
    }, {
      rank: 21,
      name: "Elijah King",
      gamesPlayed: 8,
      win: 1,
      loss: 6,
      tie: 1,
      captainWin: 0,
      attendance: 8,
      nonAttendance: 0,
      points: 10
    }, {
      rank: 22,
      name: "Harper Scott",
      gamesPlayed: 5,
      win: 1,
      loss: 3,
      tie: 1,
      captainWin: 0,
      attendance: 5,
      nonAttendance: 0,
      points: 9
    }, {
      rank: 23,
      name: "Benjamin Green",
      gamesPlayed: 7,
      win: 0,
      loss: 6,
      tie: 1,
      captainWin: 0,
      attendance: 7,
      nonAttendance: 0,
      points: 7
    }, {
      rank: 24,
      name: "Evelyn Adams",
      gamesPlayed: 4,
      win: 0,
      loss: 3,
      tie: 1,
      captainWin: 0,
      attendance: 4,
      nonAttendance: 0,
      points: 6
    }]
  },
  'europa-league': {
    name: "Europa League",
    date: "18-Feb-2024",
    players: 32,
    totalGames: 12,
    logo: "/placeholder.svg?height=64&width=64",
    leaderboardData: [{
      rank: 1,
      name: "David Thompson",
      gamesPlayed: 12,
      win: 10,
      loss: 1,
      tie: 1,
      captainWin: 2,
      attendance: 11,
      nonAttendance: 1,
      points: 59
    }, {
      rank: 2,
      name: "Lisa Anderson",
      gamesPlayed: 11,
      win: 9,
      loss: 1,
      tie: 1,
      captainWin: 1,
      attendance: 11,
      nonAttendance: 0,
      points: 54
    }, {
      rank: 3,
      name: "Robert Taylor",
      gamesPlayed: 12,
      win: 8,
      loss: 3,
      tie: 1,
      captainWin: 1,
      attendance: 10,
      nonAttendance: 2,
      points: 46
    }, {
      rank: 4,
      name: "Jennifer Lee",
      gamesPlayed: 10,
      win: 7,
      loss: 2,
      tie: 1,
      captainWin: 1,
      attendance: 9,
      nonAttendance: 1,
      points: 42
    }, {
      rank: 5,
      name: "James Martinez",
      gamesPlayed: 12,
      win: 6,
      loss: 5,
      tie: 1,
      captainWin: 1,
      attendance: 9,
      nonAttendance: 3,
      points: 35
    }, {
      rank: 6,
      name: "Emily Wilson",
      gamesPlayed: 11,
      win: 6,
      loss: 4,
      tie: 1,
      captainWin: 0,
      attendance: 11,
      nonAttendance: 0,
      points: 33
    }, {
      rank: 7,
      name: "Michael Brown",
      gamesPlayed: 9,
      win: 5,
      loss: 3,
      tie: 1,
      captainWin: 1,
      attendance: 8,
      nonAttendance: 1,
      points: 30
    }, {
      rank: 8,
      name: "Sarah Davis",
      gamesPlayed: 12,
      win: 5,
      loss: 6,
      tie: 1,
      captainWin: 0,
      attendance: 11,
      nonAttendance: 1,
      points: 28
    }, {
      rank: 9,
      name: "Christopher White",
      gamesPlayed: 10,
      win: 4,
      loss: 5,
      tie: 1,
      captainWin: 0,
      attendance: 8,
      nonAttendance: 2,
      points: 25
    }, {
      rank: 10,
      name: "Jessica Clark",
      gamesPlayed: 11,
      win: 4,
      loss: 6,
      tie: 1,
      captainWin: 0,
      attendance: 11,
      nonAttendance: 0,
      points: 24
    }, {
      rank: 11,
      name: "Daniel Harris",
      gamesPlayed: 8,
      win: 3,
      loss: 4,
      tie: 1,
      captainWin: 0,
      attendance: 7,
      nonAttendance: 1,
      points: 20
    }, {
      rank: 12,
      name: "Amanda Martin",
      gamesPlayed: 12,
      win: 3,
      loss: 8,
      tie: 1,
      captainWin: 0,
      attendance: 11,
      nonAttendance: 1,
      points: 19
    }, {
      rank: 13,
      name: "Matthew Johnson",
      gamesPlayed: 9,
      win: 2,
      loss: 6,
      tie: 1,
      captainWin: 0,
      attendance: 7,
      nonAttendance: 2,
      points: 15
    }, {
      rank: 14,
      name: "Olivia Taylor",
      gamesPlayed: 11,
      win: 2,
      loss: 8,
      tie: 1,
      captainWin: 0,
      attendance: 11,
      nonAttendance: 0,
      points: 15
    }, {
      rank: 15,
      name: "Andrew Robinson",
      gamesPlayed: 7,
      win: 1,
      loss: 5,
      tie: 1,
      captainWin: 0,
      attendance: 6,
      nonAttendance: 1,
      points: 11
    }, {
      rank: 16,
      name: "Sophia Lee",
      gamesPlayed: 12,
      win: 1,
      loss: 10,
      tie: 1,
      captainWin: 0,
      attendance: 11,
      nonAttendance: 1,
      points: 10
    }, {
      rank: 17,
      name: "William Walker",
      gamesPlayed: 11,
      win: 10,
      loss: 0,
      tie: 1,
      captainWin: 1,
      attendance: 10,
      nonAttendance: 1,
      points: 56
    }, {
      rank: 18,
      name: "Emma Hall",
      gamesPlayed: 12,
      win: 9,
      loss: 2,
      tie: 1,
      captainWin: 1,
      attendance: 12,
      nonAttendance: 0,
      points: 51
    }, {
      rank: 19,
      name: "Alexander Young",
      gamesPlayed: 10,
      win: 8,
      loss: 1,
      tie: 1,
      captainWin: 1,
      attendance: 9,
      nonAttendance: 1,
      points: 43
    }, {
      rank: 20,
      name: "Ava King",
      gamesPlayed: 11,
      win: 7,
      loss: 3,
      tie: 1,
      captainWin: 1,
      attendance: 10,
      nonAttendance: 1,
      points: 39
    }, {
      rank: 21,
      name: "Ethan Scott",
      gamesPlayed: 9,
      win: 6,
      loss: 2,
      tie: 1,
      captainWin: 0,
      attendance: 8,
      nonAttendance: 1,
      points: 31
    }, {
      rank: 22,
      name: "Mia Green",
      gamesPlayed: 12,
      win: 5,
      loss: 6,
      tie: 1,
      captainWin: 0,
      attendance: 12,
      nonAttendance: 0,
      points: 30
    }, {
      rank: 23,
      name: "Noah Adams",
      gamesPlayed: 8,
      win: 4,
      loss: 3,
      tie: 1,
      captainWin: 0,
      attendance: 7,
      nonAttendance: 1,
      points: 23
    }, {
      rank: 24,
      name: "Isabella Baker",
      gamesPlayed: 11,
      win: 3,
      loss: 7,
      tie: 1,
      captainWin: 0,
      attendance: 10,
      nonAttendance: 1,
      points: 20
    }, {
      rank: 25,
      name: "Liam Carter",
      gamesPlayed: 7,
      win: 2,
      loss: 4,
      tie: 1,
      captainWin: 0,
      attendance: 6,
      nonAttendance: 1,
      points: 13
    }, {
      rank: 26,
      name: "Charlotte Evans",
      gamesPlayed: 12,
      win: 1,
      loss: 10,
      tie: 1,
      captainWin: 0,
      attendance: 12,
      nonAttendance: 0,
      points: 12
    }, {
      rank: 27,
      name: "Mason Foster",
      gamesPlayed: 6,
      win: 0,
      loss: 5,
      tie: 1,
      captainWin: 0,
      attendance: 5,
      nonAttendance: 1,
      points: 7
    }, {
      rank: 28,
      name: "Amelia Gray",
      gamesPlayed: 11,
      win: 0,
      loss: 10,
      tie: 1,
      captainWin: 0,
      attendance: 10,
      nonAttendance: 1,
      points: 8
    }, {
      rank: 29,
      name: "Elijah Hughes",
      gamesPlayed: 5,
      win: 0,
      loss: 4,
      tie: 1,
      captainWin: 0,
      attendance: 4,
      nonAttendance: 1,
      points: 6
    }, {
      rank: 30,
      name: "Harper Irwin",
      gamesPlayed: 12,
      win: 0,
      loss: 11,
      tie: 1,
      captainWin: 0,
      attendance: 12,
      nonAttendance: 0,
      points: 9
    }, {
      rank: 31,
      name: "Benjamin James",
      gamesPlayed: 7,
      win: 0,
      loss: 6,
      tie: 1,
      captainWin: 0,
      attendance: 6,
      nonAttendance: 1,
      points: 7
    }, {
      rank: 32,
      name: "Evelyn Kelly",
      gamesPlayed: 9,
      win: 0,
      loss: 8,
      tie: 1,
      captainWin: 0,
      attendance: 8,
      nonAttendance: 1,
      points: 8
    }]
  }
};
