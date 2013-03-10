namespace :air do

  desc 'Generate random flight data HTML snippets'
  task :random => :environment do
    airports = %w|ORD JFK LAX SFO|

    100.times do |n|
      from, to = airports.sample(2)
      departs_at = Time.parse("#{rand(1..23)}:#{["00", "15", "30", "52"].sample}")
      seats = [0, rand(1..60), rand(1..60)].sample
      book_now = seats > 0 ? '<a class="btn">Book Now</a>' : nil
      puts %Q{
              <tr>
                <td>#{rand(101..999)}</td>
                <td>#{from}</td>
                <td>#{departs_at.strftime("%l:%I %p")}</td>
                <td>#{to}</td>
                <td>#{(departs_at + 90.minutes).strftime("%l:%I %p")}</td>
                <td>#{rand(140..512)}</td>
                <td>#{rand(94..176)} minutes</td>
                <td>#{seats}</td>
                <td>#{book_now}</td>
              </tr>}
    end
  end
end
