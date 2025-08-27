import React, { useState } from 'react';
import { Terminal, Shield, Settings, Users, Ban, Eye, Zap, Gamepad2, Wrench, Music, MessageSquare, Hash, Crown } from 'lucide-react';

const CommandCategory = ({ icon: Icon, title, commands, color }: {
  icon: any;
  title: string;
  commands: Array<{name: string; description: string}>;
  color: string;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="command-category">
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-full flex items-center justify-between p-6 rounded-xl border transition-all duration-300 ${
          isExpanded 
            ? `${color} border-opacity-50` 
            : 'bg-white/5 border-white/10 hover:bg-white/10'
        }`}
      >
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${color.replace('bg-', 'bg-').replace('/20', '/30')}`}>
            <Icon className="h-6 w-6 text-white" />
          </div>
          <div className="text-left">
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="text-gray-400">{commands.length} commands available</p>
          </div>
        </div>
        <div className={`transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {isExpanded && (
        <div className="mt-4 space-y-3 animate-slide-down">
          {commands.map((command, index) => (
            <div key={index} className="command-item">
              <div className="flex items-start justify-between mb-2">
                <code className="text-blue-400 font-mono text-lg">/{command.name}</code>
                <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">SLASH</span>
              </div>
              <p className="text-gray-300">{command.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const BotCommands = () => {
  const commandCategories = [
    {
      icon: Shield,
      title: "Anti-Raid & Security",
      color: "bg-red-500/20 border-red-500",
      commands: [
        { name: "antispam", description: "Configure intelligent spam detection and prevention" },
        { name: "antilink", description: "Block malicious links and unwanted invites" },
        { name: "antibotadd", description: "Prevent unauthorized bot additions to your server" },
        { name: "anti_channel_create", description: "Stop mass channel creation attacks" },
        { name: "anti_role_create", description: "Prevent unauthorized role creation" },
        { name: "whitelist add", description: "Add trusted users to bypass security measures" },
        { name: "whitelist list", description: "View all whitelisted members and roles" },
        { name: "whitelist remove", description: "Remove users from the whitelist" }
      ]
    },
    {
      icon: Ban,
      title: "Moderation & Punishment",
      color: "bg-blue-500/20 border-blue-500",
      commands: [
        { name: "ban", description: "Permanently ban troublemakers from your server" },
        { name: "kick", description: "Remove disruptive members temporarily" },
        { name: "mute", description: "Silence users who break chat rules" },
        { name: "unmute", description: "Restore speaking privileges to muted users" },
        { name: "warn", description: "Issue formal warnings with automatic escalation" },
        { name: "clearwarns", description: "Clear warning history for reformed members" },
        { name: "purge", description: "Bulk delete messages with smart filtering" },
        { name: "lock", description: "Temporarily lock channels during incidents" },
        { name: "unlock", description: "Restore normal channel permissions" },
        { name: "timeout", description: "Put users in timeout for rule violations" }
      ]
    },
    {
      icon: MessageSquare,
      title: "Content Filtering",
      color: "bg-purple-500/20 border-purple-500",
      commands: [
        { name: "badword add", description: "Add words to the automatic filter blacklist" },
        { name: "badword remove", description: "Remove words from the filter system" },
        { name: "badword list", description: "View all currently blocked words" },
        { name: "badword enable", description: "Activate bad word filtering with custom actions" },
        { name: "badword disable", description: "Turn off automatic word filtering" },
        { name: "badword bypass_role", description: "Set roles that can bypass word filters" }
      ]
    },
    {
      icon: Gamepad2,
      title: "Fun & Entertainment",
      color: "bg-green-500/20 border-green-500",
      commands: [
        { name: "8ball", description: "Ask the magic 8-ball for mystical answers" },
        { name: "meme", description: "Get fresh memes from popular subreddits" },
        { name: "joke", description: "Brighten the mood with random jokes" },
        { name: "roast", description: "Get playfully roasted by the bot" },
        { name: "compliment", description: "Receive a nice compliment to boost your day" },
        { name: "dice", description: "Roll dice for games and random decisions" },
        { name: "coinflip", description: "Flip a coin for quick yes/no decisions" },
        { name: "rps", description: "Play rock paper scissors against the bot" },
        { name: "trivia", description: "Test your knowledge with random trivia questions" },
        { name: "quote", description: "Get inspiring quotes from famous people" }
      ]
    },
    {
      icon: Music,
      title: "Music & Media",
      color: "bg-pink-500/20 border-pink-500",
      commands: [
        { name: "play", description: "Play high-quality music from YouTube and Spotify" },
        { name: "pause", description: "Pause the currently playing track" },
        { name: "resume", description: "Resume playback of paused music" },
        { name: "skip", description: "Skip to the next song in the queue" },
        { name: "queue", description: "View the current music queue" },
        { name: "volume", description: "Adjust the music playback volume" },
        { name: "nowplaying", description: "See what's currently playing" },
        { name: "lyrics", description: "Display lyrics for the current song" }
      ]
    },
    {
      icon: Users,
      title: "Server Information",
      color: "bg-cyan-500/20 border-cyan-500",
      commands: [
        { name: "serverinfo", description: "Get detailed information about your server" },
        { name: "userinfo", description: "View detailed profile information for any member" },
        { name: "avatar", description: "Display user avatars and banners in high quality" },
        { name: "membercount", description: "Show current server member statistics" },
        { name: "roleinfo", description: "Get information about server roles" },
        { name: "channelinfo", description: "View details about specific channels" },
        { name: "boostinfo", description: "Check server boost status and perks" }
      ]
    },
    {
      icon: Crown,
      title: "Server Management",
      color: "bg-yellow-500/20 border-yellow-500",
      commands: [
        { name: "role add", description: "Assign roles to members efficiently" },
        { name: "role remove", description: "Remove roles from users" },
        { name: "role create", description: "Create new roles with custom permissions" },
        { name: "emojiadd", description: "Add custom emojis to enhance your server" },
        { name: "emojisearch", description: "Find emojis across all your servers" },
        { name: "announce", description: "Create professional announcements" },
        { name: "poll", description: "Create interactive polls for community decisions" },
        { name: "giveaway", description: "Host exciting giveaways for your members" }
      ]
    },
    {
      icon: Settings,
      title: "Welcome & Automation",
      color: "bg-indigo-500/20 border-indigo-500",
      commands: [
        { name: "welcome enable", description: "Set up custom welcome messages for new members" },
        { name: "welcome disable", description: "Turn off welcome message system" },
        { name: "welcome test", description: "Preview how your welcome message looks" },
        { name: "welcome help", description: "Learn about welcome message variables" },
        { name: "autorole", description: "Automatically assign roles to new joiners" },
        { name: "autovcsetup", description: "Create dynamic voice channels that auto-delete" },
        { name: "boost enable", description: "Set up server boost celebration messages" },
        { name: "boost disable", description: "Turn off boost notifications" },
        { name: "boost test", description: "Test your boost message setup" }
      ]
    },
    {
      icon: Hash,
      title: "Utility & Tools",
      color: "bg-orange-500/20 border-orange-500",
      commands: [
        { name: "ping", description: "Check bot latency and response time" },
        { name: "help", description: "Get comprehensive help and command information" },
        { name: "prefix", description: "View the current server command prefix" },
        { name: "setprefix", description: "Change the server's command prefix" },
        { name: "afk", description: "Set your away-from-keyboard status" },
        { name: "remind", description: "Set personal reminders for important tasks" },
        { name: "weather", description: "Get current weather information for any city" },
        { name: "translate", description: "Translate text between different languages" },
        { name: "define", description: "Get dictionary definitions for words" },
        { name: "calculate", description: "Perform mathematical calculations" }
      ]
    },
    {
      icon: Eye,
      title: "Server Statistics",
      color: "bg-teal-500/20 border-teal-500",
      commands: [
        { name: "serverstats", description: "Set up live server statistic channels" },
        { name: "leaderboard", description: "View the most active server members" },
        { name: "activity", description: "Check server activity and engagement metrics" },
        { name: "growth", description: "View server growth statistics over time" },
        { name: "topmembers", description: "See the most valuable community members" },
        { name: "channels", description: "Get overview of all server channels" }
      ]
    }
  ];

  const totalCommands = commandCategories.reduce((total, category) => total + category.commands.length, 0);

  return (
    <section id="commands" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-semibold mb-6">
            <Terminal className="h-4 w-4" />
            Complete Command Suite
          </div>
          <h2 className="text-4xl lg:text-6xl font-black mb-6">
            <span className="text-white">Everything You Need</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">In One Bot</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From advanced security to fun entertainment, NexuSec provides all the tools 
            you need to build and manage a thriving Discord community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {commandCategories.map((category, index) => (
            <CommandCategory key={index} {...category} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-red-600 rounded-xl text-white font-bold text-lg">
            <Zap className="h-6 w-6" />
            {totalCommands}+ Total Commands Available
          </div>
          <p className="text-gray-400 mt-4">
            All commands support both slash (/) and prefix modes for maximum flexibility
          </p>
        </div>
      </div>
    </section>
  );
};

export default BotCommands;