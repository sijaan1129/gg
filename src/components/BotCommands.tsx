import React, { useState } from 'react';
import { Terminal, Shield, Settings, Users, Ban, Eye, Zap, Gamepad2, Wrench } from 'lucide-react';

const CommandCategory = ({ icon: Icon, title, commands, color }: {
  icon: any;
  title: string;
  commands: Array<{name: string; description: string; usage: string; type?: string}>;
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
                <div className="flex gap-2">
                  <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">SLASH</span>
                  {command.type === 'both' && (
                    <span className="text-xs text-gray-500 bg-purple-800 px-2 py-1 rounded">PREFIX</span>
                  )}
                </div>
              </div>
              <p className="text-gray-300 mb-2">{command.description}</p>
              <div className="text-sm text-gray-400">
                <span className="font-semibold">Usage:</span> <code className="text-gray-300">{command.usage}</code>
              </div>
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
      title: "Security Commands",
      color: "bg-red-500/20 border-red-500",
      commands: [
        {
          name: "antispam",
          description: "Configure Anti-Spam System",
          usage: "/antispam"
        },
        {
          name: "antilink",
          description: "Configure Anti-Link System",
          usage: "/antilink"
        },
        {
          name: "antibotadd",
          description: "Configure Anti-Bot-Add system",
          usage: "/antibotadd"
        },
        {
          name: "anti_channel_create",
          description: "Enable or disable anti-channel creation protection & set punishment",
          usage: "/anti_channel_create"
        },
        {
          name: "whitelist add",
          description: "Add to whitelist",
          usage: "/whitelist add"
        },
        {
          name: "whitelist list",
          description: "Show whitelisted users/roles",
          usage: "/whitelist list"
        },
        {
          name: "whitelist remove",
          description: "Remove from whitelist",
          usage: "/whitelist remove"
        }
      ]
    },
    {
      icon: Ban,
      title: "Moderation Commands",
      color: "bg-blue-500/20 border-blue-500",
      commands: [
        {
          name: "ban",
          description: "Ban a user with optional reason and message deletion",
          usage: "/ban",
          type: "both"
        },
        {
          name: "kick",
          description: "Kick a user from the server with optional reason",
          usage: "/kick",
          type: "both"
        },
        {
          name: "mute",
          description: "Mute a user indefinitely",
          usage: "/mute",
          type: "both"
        },
        {
          name: "unmute",
          description: "Remove mute from a user",
          usage: "/unmute",
          type: "both"
        },
        {
          name: "warn",
          description: "Issue a warning to a user with automatic escalation",
          usage: "/warn",
          type: "both"
        },
        {
          name: "clearwarns",
          description: "Clear warnings for a member",
          usage: "/clearwarns"
        },
        {
          name: "purge",
          description: "Bulk delete messages with various filters",
          usage: "/purge",
          type: "both"
        },
        {
          name: "lock",
          description: "Lock a channel to prevent new messages",
          usage: "/lock",
          type: "both"
        },
        {
          name: "unlock",
          description: "Unlock a previously locked channel",
          usage: "/unlock",
          type: "both"
        },
        {
          name: "announce",
          description: "Create and send an announcement to a channel",
          usage: "/announce"
        }
      ]
    },
    {
      icon: Gamepad2,
      title: "Fun Commands",
      color: "bg-green-500/20 border-green-500",
      commands: [
        {
          name: "ping",
          description: "Check the bot's latency",
          usage: "/ping"
        },
        {
          name: "help",
          description: "Shows all commands and features",
          usage: "/help"
        },
        {
          name: "avatar",
          description: "View a user's avatar and banner",
          usage: "/avatar"
        },
        {
          name: "serverinfo",
          description: "Get information about this server",
          usage: "/serverinfo"
        },
        {
          name: "emojiadd",
          description: "Add a custom emoji to the server",
          usage: "/emojiadd"
        },
        {
          name: "emojisearch",
          description: "Search for emojis by name across servers",
          usage: "/emojisearch"
        },
        {
          name: "afk",
          description: "Set your AFK status",
          usage: "/afk"
        }
      ]
    },
    {
      icon: Wrench,
      title: "Setup Commands",
      color: "bg-yellow-500/20 border-yellow-500",
      commands: [
        {
          name: "welcome enable",
          description: "Enable welcome messages",
          usage: "/welcome enable"
        },
        {
          name: "welcome disable",
          description: "Disable welcome messages",
          usage: "/welcome disable"
        },
        {
          name: "welcome help",
          description: "Show welcome message variables and setup guide",
          usage: "/welcome help"
        },
        {
          name: "welcome test",
          description: "Test the welcome message",
          usage: "/welcome test"
        },
        {
          name: "autorole",
          description: "Set or disable auto-role for new members",
          usage: "/autorole"
        },
        {
          name: "autovcsetup",
          description: "Setup auto VC system",
          usage: "/autovcsetup"
        },
        {
          name: "prefix",
          description: "Show the server's current prefix",
          usage: "/prefix"
        },
        {
          name: "setprefix",
          description: "Set a new server prefix",
          usage: "/setprefix"
        },
        {
          name: "serverstats",
          description: "Setup or remove server stat channels",
          usage: "/serverstats"
        },
        {
          name: "leaderboard",
          description: "Show the server leaderboard",
          usage: "/leaderboard"
        },
        {
          name: "role add",
          description: "Add a role to a user",
          usage: "/role add"
        },
        {
          name: "role remove",
          description: "Remove a role from a user",
          usage: "/role remove"
        }
      ]
    }
  ];

  return (
    <section id="commands" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-semibold mb-6">
            <Terminal className="h-4 w-4" />
            Slash & Prefix Commands
          </div>
          <h2 className="text-4xl lg:text-6xl font-black mb-6">
            <span className="text-white">Powerful</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">Command Arsenal</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Complete control over your server with both modern slash commands and classic prefix commands. 
            Advanced security, moderation, and fun features at your fingertips.
          </p>
        </div>

        <div className="space-y-6">
          {commandCategories.map((category, index) => (
            <CommandCategory key={index} {...category} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-red-600 rounded-lg text-white font-semibold">
            <Zap className="h-5 w-5" />
            50+ Total Commands Available
          </div>
        </div>
      </div>
    </section>
  );
};

export default BotCommands;